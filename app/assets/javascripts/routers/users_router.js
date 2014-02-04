PlanIt.Routers.Users = Backbone.Router.extend({
  initialize: function(options) {
    this.$sidebar = options.$sidebar;
    this.$main = options.$main;
  },

  routes: {
    "": "root",
    "users/index": "usersIndex",
    "friends/index": "friendsIndex",
    "users/:id": "userShow",
    "calendar": "calendar"
  },
});
