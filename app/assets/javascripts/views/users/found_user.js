PlanIt.Views.FoundUser = Backbone.View.extend({

  template: JST['users/found_user'],

  events: {
    'click #add-friend': 'addFriend',
    'click #delete-friend': 'deleteFriend'
  },

  render: function() {
    var renderedContent = this.template({
      user: this.model,
      friends: PlanIt.friends,
      current_user: PlanIt.current_user.id
    });
    this.$el.html(renderedContent);
    return this;
  },

  addFriend: function(event){
    event.preventDefault();
    var id = this.model.id;
    var sendURL = "/api/friendships/";
    var that = this;
    $.ajax ({
      type: 'post',
      data: {friendship: { user_id: PlanIt.current_user.id, friend_id: id }},
      url: sendURL,
      success: function(response) {
        PlanIt.friends.add(response)
      }
    })
  },

  deleteFriend: function(event){
    var that = this;
    event.preventDefault();
    var id = this.model.id;
    var sendURL = "/api/friendships/0"
    var that = this;
    $.ajax ({
      type: 'delete',
      data: {friendship: { friend_id: id }},
      url: sendURL,
      success: function(response) {
        PlanIt.friends.remove(that.model.id)
      }
    });
  }
});