PlanIt.Views.PastEventItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['events/past_event_item'],

  render: function() {
    var that = this;
    var event_pics = that.model.get('event_pics').first();
    var content = this.template({
      event: that.model,
      event_pics: event_pics
    });
    this.$el.html(content);
    return this;
  }
});