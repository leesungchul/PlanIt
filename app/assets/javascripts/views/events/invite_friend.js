PlanIt.Views.InviteFriend = Backbone.View.extend({
  tagName: 'li',

  initialize: function(options){
    this.before_dl = options.before_dl
  },

  className: 'list-group-item invites',

  template: JST['events/invite_friend'],

  render: function() {
    var that = this;
    var renderedContent = this.template({
      friend: that.model,
      before_dl: that.before_dl
    });
    this.$el.html(renderedContent);
    return this;
  }
});