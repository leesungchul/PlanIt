PlanIt.Views.CurrentEvents = Backbone.View.extend({
  template: JST['events/current'],

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.forEach(function(event){
      var view = new PlanIt.Views.SideCurrentEvent({ model: event });
      that.$('#current-events').append(view.render().$el);
    });
    return this;
  }
});