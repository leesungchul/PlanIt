PlanIt.Models.CurrentUser = Backbone.Model.extend ({
  url: '/users/current',

  parse: function(response) {
    PlanIt.favorites = new PlanIt.Collections.Places(response.favorites);
    PlanIt.friends = new PlanIt.Collections.Users(response.all_friends);
    PlanIt.users.add(PlanIt.friends.models)
    PlanIt.events = new PlanIt.Collections.Events(response.events);
    return {
      user_name: response.user_name,
      email: response.email,
      id: response.id
    }
  }
});