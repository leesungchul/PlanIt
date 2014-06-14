PlanIt.Collections.Events = Backbone.Collection.extend({
  model: PlanIt.Models.Event,
  url: '/api/events',
  comparator: function(event) {
    if (event.get('current_event') == true) {
      var temp = new Date(event.get('deadline'));
      return -temp.getTime();
    } else {
      var temp = new Date(event.get('start_time'));
      return -temp.getTime();
    }
  }
});
