PlanIt.Models.Event = Backbone.Model.extend({
  parse: function(response) {
    return {
      title: response.title,
      deadline: response.deadline,
      id: response.id,
      creator_id: response.creator_id,
      created_at: response.created_at,
      updated_at: response.updated_at,
      final_place: response.final_place,
      start_time: response.start_time,
      end_time: response.end_time,
      current_event: response.current_event,
      event_circles: new PlanIt.Collections.EventCircles(response.event_circles),
      event_places: new PlanIt.Collections.EventPlaces(response.event_places),
      time_suggestions: new PlanIt.Collections.TimeSuggestions(response.time_suggestions),
      event_pics: new PlanIt.Collections.EventPics(response.event_pics)
    }
  }
});
