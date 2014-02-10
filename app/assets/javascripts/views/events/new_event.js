PlanIt.Views.NewEvent = Backbone.View.extend ({
  template: JST['events/new'],

  events: {
    'click #datepick': 'pickDate',
    'click #timepick': 'pickTime',
    'submit': 'createEvent'
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  pickDate: function() {
    this.$('#datepick').bfhdatepicker('toggle')
  },

  pickTime: function(event) {
    this.$('#timepick').bfhtimepicker('toggle')
  },

  createEvent: function(event) {
    var that = this;
    event.preventDefault();
    var title = this.$('#new-event')[0][0].value;
    var deadline_time = this.$('#new-event')[0][2].value;
    var deadline_date = this.$('#new-event')[0][1].value;
    var data = { deadline_date: deadline_date, deadline_time: deadline_time, event: { title: title } };
    $.ajax({
      type: "post",
      url: "/api/events",
      data: data,
      success: function(response){
        that.collection.add(response);
        Backbone.history.navigate("#events/" + response.id, { trigger: true });
      }
    });
  }
});