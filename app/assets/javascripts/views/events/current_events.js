PlanIt.Views.CurrentEvents = Backbone.View.extend({
  template: JST['events/current'],

  initialize: function(){
    this.listenTo(this.collection, 'add remove change:current_event', this.render)
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    if (this.collection.where({current_event: true}).length > 0) {
      this.collection.where({current_event: true}).forEach(function(event){
        var view = new PlanIt.Views.SideCurrentEvent({ model: event });
        that.$('#current-events').append(view.render().$el);
      });
    } else {
      this.$el.html("<h2>No current events. <a href='#/events/new'>Click To Create One Now!</a></h2>")
    }

    return this;
  }
});