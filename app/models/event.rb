class Event < ActiveRecord::Base
  require 'Date'

  attr_accessible :title, :creator_id, :deadline, :final_place, :start_time,
    :end_time, :current_event

  validates :title, :creator_id, :presence => true

  has_many :event_places, :dependent => :destroy

  has_many :places, :through => :event_places, :source => :place

  has_many :time_suggestions, :dependent => :destroy

  has_many :event_circles, :dependent => :destroy

  has_many :members, :through => :event_circles, :source => :user

  has_many :event_pics, :dependent => :destroy

  accepts_nested_attributes_for :event_places, :time_suggestions, :event_circles, allow_destroy: true

  def is_past_event
    @temp1 = DateTime.now.strftime('%a, %d %b %Y %H:%M:%S')
    @now = DateTime.strptime(@temp1,'%a, %d %b %Y %H:%M:%S').strftime('%s')
    @temp2 = self.end_time.strftime('%a, %d %b %Y %H:%M:%S')
    @et = DateTime.strptime(@temp2, '%a, %d %b %Y %H:%M:%S').strftime('%s')
    if @now > @et
     self.current_event = false
    end
  end
end
