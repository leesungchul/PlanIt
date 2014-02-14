PlanIt.Views.NewEvent = Backbone.View.extend ({
  tagName: 'form',

  id: 'new-event',

  className: 'fullmain',

  template: JST['events/new'],

  initialize: function() {
    this.members = new PlanIt.Collections.Users();
    this.listenTo(this.members, 'add remove', this.render);
  },

  events: {
    'submit': 'createEvent',
    'click .remove-invite': 'removeInvite'
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.members.each(function(member) {
      var view = new PlanIt.Views.InviteFriend({
        model: member
      });
      that.$('#invites').append(view.render().$el);
    });
    var i = 0;
    PlanIt.favorites.each(function(place){
      var name = place.get('place_name');
      that.$('#places').append(
        '<option data-id=' + i + '>'
      );
      that.$('option[data-id='+i+']').val(name)
      i+=1;
    });
    this.$('.dropbox').droppable({
      accept: '.side-friend-box',
      drop: function(event, ui) {
        var friendId = ui.draggable.data('cid');
        var friend = PlanIt.friends.get(friendId);
        if (!that.members.get(friend)) {
          that.members.add(friend);
        }
      }
    });
    return this;
  },

  removeInvite: function(event) {
    var friendId = $(event.currentTarget).data('id');
    this.members.remove(friendId);
  },

  createEvent: function(event) {
    var that = this;
    event.preventDefault();
    var eventData = $(event.currentTarget).serializeJSON();
    var membersString = this.members.toJSON();
    eventData.event_circles = membersString;
    $.ajax({
      type: "post",
      url: "/api/events",
      data: eventData,
      success: function(response){
        that.collection.add(response, {parse:true});
        that.goToShow(response.id);
      }
    });
  },

  goToShow: function(id) {
    Backbone.history.navigate("#/events/" + id, { trigger: true });
  }
});