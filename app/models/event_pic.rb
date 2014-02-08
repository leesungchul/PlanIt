class EventPic < ActiveRecord::Base
  attr_accessible :event_id, :photo

  belongs_to :event

  has_attached_file :photo, styles: { big: "800x600!", small: "125x100!" }
end
