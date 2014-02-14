json.array! (@events) do |json, event|
  json.(event, :id, :title, :start_time, :end_time, :final_place, :current_event, :creator_id, :deadline)
  json.event_circles event.event_circles do |json, event_circle|
    json.id event_circle.id
    json.user_id event_circle.user_id
    json.event_id event_circle.event_id
  end
  json.event_places event.event_places do |json, event_place|
    json.id event_place.id
    json.place_id event_place.place_id
    json.event_id event_place.event_id
    json.place_likes event_place.place_likes
  end
  json.time_suggestions event.time_suggestions do |json, time_suggestion|
    json.id time_suggestion.id
    json.start_time time_suggestion.start_time
    json.end_time time_suggestion.end_time
    json.time_likes time_suggestion.time_likes
  end
  json.event_pics event.event_pics do |json, event_pic|
    json.id event_pic.id
    json.event_id event_pic.event_id
    json.photo event_pic.photo
    json.bigurl event_pic.photo.url(:big)
    json.smallurl event_pic.photo.url(:small)
  end
end