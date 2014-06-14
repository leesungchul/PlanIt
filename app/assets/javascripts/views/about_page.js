PlanIt.Views.AboutPage = Backbone.View.extend({
  template: JST['about'],

  className: 'about-page',

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});