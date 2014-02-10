PlanIt.Views.EventShow = Backbone.View.extend ({
  template: JST['events/show'],

  render: function() {
    console.log(this.model.get('deadline'))
    var content = this.template({
      event: this.model,
      users: PlanIt.users
    });
    this.$el.html(content);
    var countdown = new PlanIt.Views.Countdown({
      model: this.model
    });
    this.$('#countdown').html(countdown.render().$el);
    return this;
  }
});