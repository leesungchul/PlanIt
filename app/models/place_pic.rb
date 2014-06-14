class PlacePic < ActiveRecord::Base
  attr_accessible :place_id, :photo
  has_attached_file :photo, styles: { big: "800x600!", small: "200x150!" }
  validates_attachment_content_type :photo, :content_type => %w(image/jpeg image/jpg image/png)
  belongs_to :place
end
