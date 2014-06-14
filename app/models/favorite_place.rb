class FavoritePlace < ActiveRecord::Base
  attr_accessible :user_id, :place_id
  belongs_to :user
  belongs_to :place
end
