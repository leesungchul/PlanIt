PlanIt.Views.Calendar = Backbone.View.extend({
  className: 'calendar',

  render: function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    this.$el.fullCalendar({
      theme: true,
      header: {
        ignoreTimezone: false,
        default: 'month'
      },
      selectable: true,
      selectHelper: true,
      editable: true,
    });
    return this;
  }
});