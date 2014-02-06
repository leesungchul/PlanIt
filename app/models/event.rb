class Event < ActiveRecord::Base
  attr_accessible :title, :creator_id, :deadline, :final_place, :final_time,
    :current_event

  validates :title, :creator_id, :presence => true # :deadline,

  has_many :event_places, :dependent => :destroy

  has_many :places, :through => :event_places, :source => :place

  has_many :event_times, :dependent => :destroy

  has_many :time_suggestions, :through => :event_times, :source => :time_suggestion

  has_many :event_circles, :dependent => :destroy

  has_many :members, :through => :event_circles, :source => :user

  accepts_nested_attributes_for :event_places, :event_times, :event_circles
end
