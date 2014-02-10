class EventPlace < ActiveRecord::Base
  attr_accessible :event_id, :place_id, :place_likes_count

  belongs_to :event
  belongs_to :place
end
