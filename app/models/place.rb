class Place < ActiveRecord::Base
  attr_accessible :place_name, :address, :city, :state, :zip, :country, :phone,
  :url

  has_many :place_pics

end
