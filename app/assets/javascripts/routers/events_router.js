PlanIt.Routers.Events = Backbone.Router.extend({
  initialize: function(options) {
    this.$sidebar = options.$sidebar;
    this.$main = options.$main;
  },

  routes: {
    'events/new': 'newEvent',
    'past_events': 'pastEvents',
    'events': "currentEvents",
    'events/:id': 'eventShow'
  },

  newEvent: function() {
    var newEventView = new PlanIt.Views.NewEvent({
      collection: PlanIt.events
    });
    this._swapMainView(newEventView);
  },

  pastEvents: function() {
    var pastEventsView = new PlanIt.Views.PastEvents({
      collection: PlanIt.events.where({current_event: false})
    });
    this._swapMainView(pastEventsView);
  },

  currentEvents: function() {
    var currentEventsView = new PlanIt.Views.CurrentEvents({
      collection: PlanIt.events.where({current_event: true})
    });
    this._swapMainView(currentEventsView);
  },

  eventShow: function(id) {
    var that = this;
    this._getEvent(id, function(event) {
      var eventShowView = new PlanIt.Views.EventShow({
        model: event,
        collection: PlanIt.events
      });
      that._swapMainView(eventShowView);
    });
  },

  _getEvent: function(id, callback) {
    var that = this;
    var event = PlanIt.events.get(id);
    if (!event) {
      event = new PlanIt.Models.Event({ id: id });
      event.collection = PlanIt.events;
      event.fetch({
        success: function() {
          PlanIt.events.add(event);
          callback(event);
        }
      });
    } else {
      callback(event);
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
