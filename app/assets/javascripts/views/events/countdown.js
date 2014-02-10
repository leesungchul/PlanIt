PlanIt.Views.Countdown = Backbone.View.extend({
  className: "circle",

  template: JST['events/countdown'],

  render: function() {
    var that = this;
    var datetime = this.model.get('deadline')
    var temp = new Date(datetime)
    var now = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000))
    var that = this;
    var content = this.template({
      deadline: now
    });
    this.$el.html(content);
    this.$('.deadline-circles').TimeCircles({
      start: true,
      count_past_zero: false,
      Days: {
        show: true
      },
      Hours: {
        show:true
      },
      Minutes: {
        show: true
      },
      Seconds: {
        show: true
      },

    }).addListener(function(unit, amount, total){
      if(total == 0) {
        that.$('.deadline-circles').html('<h1>LOCKED</h1>')
      }
    });

    return this;
  }
});