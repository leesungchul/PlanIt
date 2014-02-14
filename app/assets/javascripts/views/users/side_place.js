PlanIt.Views.SidePlace = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: JST['favorite_places/side_place'],

  render: function() {
    var that = this;
    var renderedContent = this.template({
      place: that.model,
      place_pics: that.model.get('place_pics')
    });
    this.$el.html(renderedContent);
    return this;
  }
});