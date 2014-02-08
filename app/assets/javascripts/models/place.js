PlanIt.Models.Place = Backbone.Model.extend({
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

