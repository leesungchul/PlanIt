PlanIt.Views.Countdown = Backbone.View.extend({
  className: "circle",

  template: JST['events/countdown'],

  render: function() {
    var that = this;
    var deadline = this.model.get('deadline');
    var starttime = this.model.get('start_time');
    var endtime = this.model.get('end_time');
    var dl = new Date(deadline)
    var st = new Date(starttime);
    var et = new Date(endtime);
    var datetime = new Date();
    if (datetime.getTime() + 1500 < dl.getTime()) {
      var content = this.template({
        deadline: dl
      });
      this.$el.html(content);
      this.$el.prepend('<h4>Voting/Suggestion ends in:</h4>');
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
    } else if (datetime.getTime() + 1500 < st.getTime()) {
      var content = that.template({
        deadline: st
      });
      that.$el.html(content);
      that.$el.prepend('<h4>Event starts in:</h4>')
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
      that.$el.html("<h1>Event has started or has completed</h1>")
    }
    return this;
  }
});