PlanIt.Collections.Places = Backbone.Collection.extend({

  model: PlanIt.Models.Place,

  url: '/api/places',

  comparator: function(place) {
    return place.get("place_name")
  }

});
