class EventPlace < ActiveRecord::Base
  attr_accessible :event_id, :place_id

  belongs_to :event
  belongs_to :place
end
