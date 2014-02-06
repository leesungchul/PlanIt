PlanIt.Views.Friends = Backbone.View.extend ({

  template: JST['users/friends'],

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(friend){
      var view = new PlanIt.Views.SideFriend({ model: friend });
      that.$('#friends').append(view.render().$el);
    });
    return this;
  }
});