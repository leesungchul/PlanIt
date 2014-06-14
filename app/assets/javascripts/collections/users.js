PlanIt.Collections.Users = Backbone.Collection.extend({
  model: PlanIt.Models.User,
  url: '/users',
  parse: function(response) {
    this.page = parseInt(response.page);
    this.total_pages = parseInt(response.total_pages);
    return response.models
  },
  comparator: function(user) {
    return user.get("user_name")
  }
});
