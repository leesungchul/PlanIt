PlanIt.Collections.Events = Backbone.Collection.extend({

  model: PlanIt.Models.Event,

  url: '/api/events',

  comparator: function(event) {
    return event.get("deadline", "created_at")
  }

});
