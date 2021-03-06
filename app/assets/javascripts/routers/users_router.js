PlanIt.Routers.Users = Backbone.Router.extend({
  initialize: function(options) {
    this.$sidebar = options.$sidebar;
    this.$main = options.$main;
    PlanIt.places.add(PlanIt.favorites.toJSON(), {silent: true});
  },

  routes: {
    "": "root",
    "favorite_places/new": "addFavPlace",
    "favorite_places/:id": "favPlaceShow",
    "favorite_places": "favPlacesIndex",
    "users/index": "usersIndex",
    "users/:id": "userShow",
    "friends/index": "friendsIndex",
    "calendar": "calendar",
    "places/:id": "placeShow",
    "contact": "contact",
    "about": "about",
    "help": "help"
  },

  contact: function() {
    var contactView = new PlanIt.Views.ContactPage();
    this._swapMainView(contactView);
  },

  about: function() {
    var aboutView = new PlanIt.Views.AboutPage();
    this._swapMainView(aboutView);
  },

  help: function() {
    var helpView = new PlanIt.Views.HelpView();
    this._swapMainView(helpView);
  },

  root: function() {
    this.friendsIndex();
    this.about();
  },

  favPlacesIndex: function() {
    var favPlacesView = new PlanIt.Views.FavPlacesIndex({
      collection: PlanIt.favorites
    });
    this._swapSideView(favPlacesView);
  },

  addFavPlace: function() {
    var newFavPlace = new PlanIt.Views.NewFavPlace({
      collection: PlanIt.favorites
    });
    this._swapMainView(newFavPlace);
  },

  favPlaceShow: function(id) {
    var favPlaceView = new PlanIt.Views.FavPlaceShow({
      model: PlanIt.favorites.get(id),
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
      var userShowView = new PlanIt.Views.UserShow({
        model: user,
        collection: PlanIt.friends,
        users: PlanIt.users
      });
      that._swapMainView(userShowView);
    });
  },

  placeShow: function(id) {
    var that = this;
    this._getPlace(id, function(place) {
      var placeView = new PlanIt.Views.FavPlaceShow({
        model: place,
        collection: PlanIt.favorites
      });
      that._swapMainView(placeView);
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
          PlanIt.users.add(user);
          callback(user);
        }
      });
    } else {
      callback(user);
    }
  },

  _getPlace: function(id, callback) {
    var that = this;
    var place = PlanIt.places.get(id);
    if (!place) {
      place = new PlanIt.Models.Place({ id: id });
      place.collection = PlanIt.places;
      place.fetch({
        success: function() {
          PlanIt.places.add(place);
          callback(place);
        }
      });
    } else {
      callback(place);
    }
  },

  _swapSideView: function(view) {
    this.$sidebar._currentView && this.$sidebar._currentView.remove();
    this.unbind();
    this.$sidebar._currentView = view;
    this.$sidebar.html(view.render().$el);
  },

  _swapMainView: function(view) {
    this.$main._currentView && this.$main._currentView.remove();
    this.$main._currentView = view;
    this.$main.html(view.render().$el);
  }
});
