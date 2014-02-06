PlanIt.Routers.Users = Backbone.Router.extend({
  initialize: function(options) {
    this.$sidebar = options.$sidebar;
    this.$main = options.$main;
  },

  routes: {
    "": "root",
    "favorite_places": "favPlacesIndex",
    "favorite_places/:id": "favPlaceShow",
    "users/index": "usersIndex",
    "users/:id": "userShow",
    "friends/index": "friendsIndex",
    "calendar": "calendar"
  },

  root: function() {
    this.friendsIndex();
    this.calendar();
  },

  favPlacesIndex: function() {
    var favPlacesView = new PlanIt.Views.FavPlacesIndex({
      collection: PlanIt.favorites
    });
    this._swapSideView(favPlacesView);
  },

  favPlaceShow: function() {
    var favPlaceView = new PlanIt.Views.FavPlaceShow({
      collection: PlanIt.favorites
    });
    this._swapMainView(favPlaceView);
  },

  calendar: function() {
    var calendarView = new PlanIt.Views.Calendar();
    this._swapMainView(calendarView);
  },

  friendsIndex: function() {
    var that = this;
    var friendsView = new PlanIt.Views.Friends({
      collection: PlanIt.friends
    });
    that._swapSideView(friendsView)
  },

  usersIndex: function() {
    var that = this;
    var usersIndexView = new PlanIt.Views.UsersIndex({
      collection: PlanIt.users,
    });
    that._swapMainView(usersIndexView);
  },

  userShow: function(id) {
    var that = this;
    this._getUser(id, function(user) {
      var userShowView = new PlanIt.Views.UserShow({ model: user,
        collection: PlanIt.friends,
        users: PlanIt.users
      });
      that._swapMainView(userShowView);
    });
  },

  _getUser: function(id, callback) {
    var that = this;
    var user = PlanIt.users.get(id);
    if (!user) {
      user = new PlanIt.Models.User({ id: id });
      user.collection = PlanIt.users;
      user.fetch({
        success: function() {
          that.users.add(user);
          callback(user);
        }
      });
    } else {
      callback(user);
    }
  },

  _swapSideView: function(view) {
    this.$sidebar._currentView && this.$sidebar._currentView.remove();
    this.$sidebar._currentView = view;
    this.$sidebar.html(view.render().$el);
  },

  _swapMainView: function(view) {
    this.$main._currentView && this.$main._currentView.remove();
    this.$main._currentView = view;
    this.$main.html(view.render().$el);
  }
});
