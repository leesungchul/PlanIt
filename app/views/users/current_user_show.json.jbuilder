
json.(@current_user, :user_name, :email, :id)
json.favorites @current_user.favorites do |favorite|
  json.id favorite.id
  json.place_name favorite.place_name
  json.phone favorite.phone
  json.url favorite.url
  json.address favorite.address
  json.city favorite.city
  json.state favorite.state
  json.country favorite.country
  json.zip favorite.zip
  json.map favorite.map
  json.place_pics favorite.place_pics do |json, place_pic|
    json.id place_pic.id
    json.place_id place_pic.place_id
    json.photo place_pic.photo
    json.bigurl place_pic.photo.url(:big)
    json.smallurl place_pic.photo.url(:small)
  end
end
json.friends @friends do |json, friend|
  json.(friend, :user_name, :email, :id)
end
