PlanIt.Views.Calendar = Backbone.View.extend({
  className: 'calendar',

  render: function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    this.$('.fc-button-today').click();
    this.$el.fullCalendar({
      theme: true,
      header: {
        left: 'prev,next today',
        center: '',
        right: 'month, basicWeek, basicDay',
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