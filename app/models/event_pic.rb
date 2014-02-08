class EventPic < ActiveRecord::Base
  attr_accessible :event_id, :photo
  has_attached_file :photo, styles: { big: "800x600!", small: "125x100!" }
  validates_attachment_content_type :photo, :content_type => %w(image/jpeg image/jpg image/png)

  belongs_to :event


end
