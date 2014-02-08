PlanIt.Collections.Places = Backbone.Collection.extend({

  model: PlanIt.Models.Place,

  url: '/api/places',

  comparator: function(place) {
    return place.get("place_name")
  },

  parse: function(response) {
    return {
      place_name: response.place_name,
      phone: response.phone,
      url: response.url,
      address: response.address,
      city: response.city,
      state: response.state,
      country: response.country,
      zip: response.zip,
      id: response.id
    }
  }

});
