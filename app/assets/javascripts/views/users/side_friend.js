PlanIt.Views.SideFriend = Backbone.View.extend({
  tagName: 'li',

  className: 'list-group-item',

  template: JST['users/side_friend'],

  render: function() {
    var renderedContent = this.template({
      friend: this.model
    });
    this.$el.html(renderedContent);
    this.$('.side-friend-box')
      .draggable({
        revert: true,
        helper: "clone"
      });
    return this;
  }
});