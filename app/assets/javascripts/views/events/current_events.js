PlanIt.Views.CurrentEvents = Backbone.View.extend({
  template: JST['events/current'],

  initialize: function(){
    this.listenTo(this.collection, 'add remove change:current_event', this.render)
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.where({current_event: true}).forEach(function(event){
      var view = new PlanIt.Views.SideCurrentEvent({ model: event });
      that.$('#current-events').append(view.render().$el);
    });
    return this;
  }
});