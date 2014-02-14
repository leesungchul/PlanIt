PlanIt.Models.CurrentUser = Backbone.Model.extend ({
  url: '/users/current',

  parse: function(response) {
    PlanIt.favorites = new PlanIt.Collections.Places(response.favorites, {parse: true});
    PlanIt.friends = new PlanIt.Collections.Users(response.friends);
    PlanIt.users.add(PlanIt.friends.models)
    return {
      user_name: response.user_name,
      email: response.email,
      id: response.id,
      favorites: new PlanIt.Collections.Places(response.favorites),
      friends: new PlanIt.Collections.Users(response.friends)
    }
  }
});