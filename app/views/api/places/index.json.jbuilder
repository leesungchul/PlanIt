json.array! (@places) do |json, place|
  json.(place, :id, :place_name, :address, :city, :state, :zip, :country, :phone, :url, :map)
  json.place_pics place.place_pics do |json, place_pic|
    json.id place_pic.id
    json.place_id place_pic.place_id
    json.photo place_pic.photo
    json.smallurl place_pic.photo.url(:small)
    json.bigurl place_pic.photo.url(:big)
  end
end