PlanIt.Models.CurrentUser = Backbone.Model.extend ({
  url: '/users/current',

  parse: function(response) {
    PlanIt.favorite_locations = new PlanIt.Collections.FavoriteLocations(response.favorite_locations);
    PlanIt.friends = new PlanIt.Collections.Users(response.friends)
    return {
      user_name: response.user_name,
      email: response.email,
      id: response.id
    }
  }
});