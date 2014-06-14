PlanIt.Collections.EventPlaces = Backbone.Collection.extend({
  model: PlanIt.Models.EventPlace,
  url: '/api/event_places',
  comparator: function(event_place){
    return -event_place.get('place_likes');
  }
});
