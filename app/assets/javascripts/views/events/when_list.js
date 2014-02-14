PlanIt.Views.WhenList = Backbone.View.extend({
  tagName: 'li',

  className: 'when-list-item list-group-item',

  initialize: function(options){
    this.event = options.event
  },

  template: JST['events/when_list'],

  events: {
    'click #vote-when': 'voteWhen'
  },

  render: function() {
    var that = this;
    var starttime = this.model.get('start_time');
    var endtime = this.model.get('end_time');
    var temp = new Date(starttime);
    var thestart = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var temp = new Date(endtime);
    var theend = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var content = this.template({
      ts: that.model,
      thestart: thestart,
      theend: theend
    });
    this.$el.html(content);
    return this;
  },

  voteWhen: function(event){
    var that = this;
    var id = $(event.currentTarget).data('id')
    var data = { id: id }
    $.ajax({
      type: 'put',
      url: '/api/time_suggestions/' + id,
      data: data,
      success: function(response) {
        that.event.get('time_suggestions').set(response, {remove: false});
      }
    })
  }
})