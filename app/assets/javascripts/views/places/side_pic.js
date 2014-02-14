PlanIt.Views.SidePic = Backbone.View.extend({
  initialize: function(options) {
    this.place = options.place
  },

  template: JST['places/side_pic'],

  render: function() {
    var that = this;
    var renderedContent = this.template({
      pic: that.model,
      place: that.place
    });
    this.$el.html(renderedContent);
    return this;
  }

});