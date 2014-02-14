PlanIt.Views.Countdown = Backbone.View.extend({
  className: "circle",

  template: JST['events/countdown'],

  render: function() {
    var that = this;
    var deadline = this.model.get('deadline');
    var starttime = this.model.get('start_time');
    var endtime = this.model.get('end_time');
    var temp = new Date(deadline);
    var dl = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var temp = new Date(starttime);
    var st = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var temp = new Date(endtime);
    var et = new Date(temp.getTime() + (temp.getTimezoneOffset() * 60000));
    var datetime = new Date().getTime();
    if (datetime + 1000 - dl.getTime() < 0) {
      var content = this.template({
        deadline: dl
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
        }
      }).addListener(function(unit, amount, total){
        if(total == 0) {
          that.$('.deadline-circles').end().fadeOut();
          that.$el.html();
          that.spawn('timeup');
        }
      });
    } else if (datetime + 1000 - st.getTime() < 0) {
      var content = that.template({
        deadline: st
      });
      that.$el.html(content);
      that.$('.deadline-circles').TimeCircles({
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
        }
      }).addListener(function(unit, amount, total){
        if(total == 0) {
          that.spawn('timeup');
        }
      });
    } else {
      that.model.set({current_event: false});
      that.spawn('timeup');
      that.$el.html("<h1>Started!</h1>")
    }
    return this;
  }
});