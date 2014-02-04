class EventTime < ActiveRecord::Base
  attr_accessible :event_id, :time_suggestion_id

  belongs_to :event
  belongs_to :time_suggestion
end
