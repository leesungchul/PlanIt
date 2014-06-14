class User < ActiveRecord::Base
  include Gravtastic
  gravtastic :secure => true,
    :filetype => :gif,
    :size => 120,
    :rating => 'R',
    :default => 'identicon'
  attr_accessible :user_name, :password, :email, :session_token, :grav_url
  attr_reader :password
  validates :password_digest, :presence => { :message => "Password can't be blank" }
  validates :password, :length => { :minimum => 6, :allow_nil => true }
  validates :session_token, :presence => true
  validates :user_name, :email, :presence => true
  after_initialize :ensure_session_token
  has_many :friendships
  has_many :inverse_friendships,
           :class_name => "Friendship",
           :foreign_key => "friend_id"
  has_many :friends, :through => :friendships, :source => :friend
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  has_many :event_circles
  has_many :events, :through => :event_circles, :source => :event
  has_many :favorite_places
  has_many :favorites, :through => :favorite_places, :source => :place

  def self.find_by_credentials(user_name, password)
    user = User.find_by_user_name(user_name)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end

  def all_friends
    self.friends + self.inverse_friends
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
