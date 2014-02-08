PlanIt.Views.UserShow = Backbone.View.extend ({
  initialize: function(options) {
    this.users = options.users;
    this.listenTo(this.collection, "add remove", this.render);
  },

  events: {
    'click #add-friend': 'addFriend',
    'click #delete-friend': 'deleteFriend'
  },

  template: JST['users/show'],

  render: function(){
    var that = this;
    var renderedContent = this.template({
      user: that.model,
      friends: that.collection,
      users: that.users,
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
    });
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
        that.collection.remove(that.model.id)
      }
    });
  }
});