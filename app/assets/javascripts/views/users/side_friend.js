PlanIt.Views.SideFriend = Backbone.View.extend({
  template: JST['users/side_friend'],

  render: function() {
    var renderedContent = this.template({
      friend: this.model
    });
    this.$el.html(renderedContent);
    this.$('.side-friend-box')
      .draggable({
        revert: true,
        helper: "clone",
        cursorAt: {left: 20, top: 20},
      });
    return this;
  }
});