PlanIt.Views.EventShow = Backbone.View.extend ({
  className: 'fullmain',

  template: JST['events/show'],

  template1: JST['events/deadline'],

  initialize: function(options) {
    Backbone.Courier.add(this);
    this.event_circles = this.model.get('event_circles');
    this.event_places = this.model.get('event_places');
    this.time_suggestions = this.model.get('time_suggestions');
    this.listenTo(this.event_circles, 'add remove', this.render);
    this.listenTo(this.event_places, 'add change:place_likes remove', this.render);
    this.listenTo(this.time_suggestions, 'add change:time_likes remove', this.render);
  },

  onMessages: {
    'timeup': 'render'
  },

  events: {
    'click .remove-invite': 'removeInvite',
    'click #add-location-submit': 'addLocation',
    'click #add-when-submit': 'addWhen',
    'submit #event-pic': 'addEventPic',
    'change input[type=file]': 'encodeFile'
  },

  addUser: function(id){
    var that = this;
    var eventId = this.model.get('id');
    $.ajax({
      type: 'post',
      url: '/api/event_circles',
      data: {event_id: eventId, user_id: id},
      success: function(response){
        that.event_circles.add(response);
      }
    });
  },

  render: function() {
    var that = this;
    this.event_places.sort();
    this.time_suggestions.sort();
    var deadline = this.model.get('deadline');
    var starttime = this.model.get('start_time');
    var endtime = this.model.get('end_time');
    var temp = new Date(deadline);
    var dl = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var temp = new Date(starttime);
    var st = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var temp = new Date(endtime);
    var et = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var datetime = Date.now();
    var final_place = PlanIt.places.get(this.event_places.first().get('place_id'));
    var final_start_time = this.time_suggestions.first().get('start_time');
    var temp = new Date(final_start_time);
    var fst = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var final_end_time = this.time_suggestions.first().get('end_time');
    var temp = new Date(final_end_time);
    var fet = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    if (datetime + 1000 - dl < 0) {
      var content = this.template({
        event: this.model,
        users: PlanIt.users,
        before_dl: true
      });
      this.$el.html(content);
      PlanIt.favorites.each(function(place){
        that.$('#places').append(
          '<option value=' + place.get('place_name') + '>'
        );
      });
      this.$('.dropbox').droppable({
        accept: '.side-friend-box',
        drop: function(event, ui) {
          var friendId = ui.draggable.data('cid');
          that.addUser(friendId);
        }
      });
      this.event_places.each(function(ep){
        var id = ep.get('place_id');
        var place = PlanIt.places.get(id);
        var view = new PlanIt.Views.PlaceList({
          ep: ep,
          model: place,
          event: that.model,
          collection: that.event_places
        });
        that.$('#place-list').append(view.render().$el)
      });
      this.time_suggestions.each(function(ts){
        var view = new PlanIt.Views.WhenList({
          model: ts,
          event: that.model
        });
        that.$('#when-list').append(view.render().$el)
      });
    } else {
      var before_dl = false
      var content = this.template1({
        event: this.model,
        users: PlanIt.users,
        before_dl: before_dl,
        final_place: final_place,
        fst: fst,
        fet: fet
      });
      this.$el.html(content);
      this.model.get('event_pics').each(function(pic){
        var view = new PlanIt.Views.SidePic({
          model: pic,
          place: that.model
        });
        that.$('#picture-gallery').append(view.render().$el);
      });
    }
    this.event_circles.each(function(ec){
      var id = ec.get('user_id');
      var member = PlanIt.users.get(id);
      var view = new PlanIt.Views.InviteFriend({
        model: member,
        before_dl: before_dl
      });
      that.$('#invites').append(view.render().$el);
    });
    var countdown = new PlanIt.Views.Countdown({
      model: this.model
    });
    Backbone.Courier.add(countdown);
    this.$('#countdown').html(countdown.render().$el);
    return this;
  },

  addLocation: function(event) {
    var that = this;
    event.preventDefault();
    var data = this.$('#add-location').serializeJSON();
    $.ajax({
      type: 'post',
      url: '/api/event_places',
      data: data,
      success: function(response) {
        that.model.get('event_places').add(response);
      }
    })
  },

  addWhen: function(event) {
    var that = this;
    event.preventDefault();
    var data = this.$('#add-when').serializeJSON();
    $.ajax({
      type: 'post',
      url: '/api/time_suggestions',
      data: data,
      success: function(response) {
        that.model.get('time_suggestions').add(response);
      }
    });
  },

  removeInvite: function(event) {
    var userId = $(event.currentTarget).data('id');
    var eventCircleId = this.event_circles.findWhere({user_id: userId}).id;
    var eventCircle = this.event_circles.get(eventCircleId);
    eventCircle.destroy();
  },

  encodeFile: function(event) {
    this.event_pic = new PlanIt.Models.EventPic()
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      that.event_pic.set({ photo: e.target.result, event_id: that.model.id });
    }
    reader.onerror = function(resp) {
      console.log("error", resp);
      console.log(resp.getMessage());
    }
    reader.readAsDataURL(file)
  },

  addEventPic: function(event) {
    var that = this;
    event.preventDefault();
    var data = $('#event-pic').serializeJSON();
    this.model.get('event_pics').create(that.event_pic, {
      success: function() {
        that.render();
      },
      error: function() {
        console.log("fail")
      }
    });
  }
});