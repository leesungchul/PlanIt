PlanIt.Views.SidePic = Backbone.View.extend({
  initialize: function(options) {
    this.place = options.place
  },

  template: JST['places/side_pic'],

  render: function() {
    var renderedContent = this.template({
      pic: this.model,
      place: this.place
    });
    this.$el.html(renderedContent);
    return this;
  }

});