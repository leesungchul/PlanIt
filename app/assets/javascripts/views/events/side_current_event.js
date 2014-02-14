PlanIt.Views.SideCurrentEvent = Backbone.View.extend({
  initialize: function() {
    Backbone.Courier.add(this);
  },

  onMessages: {
    'timeup': 'render'
  },

  tagName: 'li',

  template: JST['events/side_current_event'],

  render: function() {
    var content = this.template({
      event: this.model
    });
    this.$el.html(content);
    var countdown = new PlanIt.Views.Countdown({
      model: this.model
    });
    Backbone.Courier.add(countdown);
    this.$('#countdown').html(countdown.render().$el);
    return this;
  }
});