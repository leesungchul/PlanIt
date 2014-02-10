PlanIt.Collections.Events = Backbone.Collection.extend({

  model: PlanIt.Models.Event,

  url: '/api/events',

  comparator: function(event) {
    if (event.get('current_event') == true) {
      return event.get("deadline")
    } else {
      return event.get("start_time")
    }
  }

});
