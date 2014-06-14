PlanIt.Collections.EventTimes = Backbone.Collection.extend({
  model: PlanIt.Models.EventTime,
  url: '/api/event_times'
});
