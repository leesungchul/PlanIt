class Event < ActiveRecord::Base
  attr_accessible :title, :creator_id, :deadline, :final_place, :final_time,
    :current_event

  validates :title, :creator_id, :deadline, :presence => true

  has_many :event_places

  has_many :places, :through => :event_places, :source => :place

  has_many :event_times

  has_many :time_suggestions, :through => :event_times, :source => :time_suggestion

  has_many :event_circles

  has_many :members, :through => :event_circles, :source => :user
end
