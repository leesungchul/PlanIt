PlanIt.Views.SidePlace = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: JST['favorite_places/side_place'],

  render: function() {
    var renderedContent = this.template({
      place: this.model,
      place_pics: PlanIt.place_pics.where({place_id: this.model.id})
    });
    this.$el.html(renderedContent);
    this.$('.side-place-box')
      .draggable({
        revert: true,
        helper: "clone"
      });
    return this;
  }
});