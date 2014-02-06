PlanIt.Models.Event = Backbone.Model.extend({
  parse: function(response) {
    PlanIt.event_circles = new PlanIt.Collections.EventCircles(response.event_circles);
    PlanIt.event_places = new PlanIt.Collections.EventPlaces(response.event_places);
    PlanIt.event_times = new PlanIt.Collections.EventTimes(response.event_times);
    return {
      title: response.title,
      deadline: response.deadline,
      id: response.id,
      creator_id: response.creator_id,
      created_at: response.created_at,
      updated_at: response.updated_at,
      final_place: response.final_place,
      final_time: response.final_time,
      current_event: response.current_event
    }
  }
});
