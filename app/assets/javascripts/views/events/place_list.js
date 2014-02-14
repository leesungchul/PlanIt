PlanIt.Views.PlaceList = Backbone.View.extend({
  tagName: 'li',

  id: 'place-list-item',

  initialize: function(options){
    this.model = options.model;
    this.ep = options.ep;
    this.event = options.event;
  },

  events: {
    'click #vote-place': 'votePlace'
  },

  className: 'list-group-item',

  template: JST["events/place_list"],

  render: function() {
    var that = this;
    var content = this.template({
      place: that.model,
      ep: that.ep
    });
    this.$el.html(content)
    return this;
  },

  votePlace: function(event){
    var that = this;
    var id = $(event.currentTarget).data('id')
    var data = { id: id }
    $.ajax({
      type: 'put',
      url: '/api/event_places/' + id,
      data: data,
      success: function(response) {
        that.event.get('event_places').set(response, {remove: false});
      }
    })
  }
});