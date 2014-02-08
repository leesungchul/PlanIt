class PlacePic < ActiveRecord::Base
  attr_accessible :place_id, :photo

  belongs_to :place

  has_attached_file :photo, styles: { big: "800x600!", small: "125x100!" }
end
