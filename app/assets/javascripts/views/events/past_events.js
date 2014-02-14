PlanIt.Views.PastEvents = Backbone.View.extend ({
  template: JST['events/past'],

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    var i = 0;
    console.log(this.collection.where({current_event: false}))
    this.collection.where({current_event: false}).forEach(function(event){
      var view = new PlanIt.Views.PastEventItem({model: event});
      if (i%2==0){
        view.$el.addClass('timeline-inverted');
        view.$('[rel=tooltip]').addClass('invert');
      }
      i+=1;
      that.$('.timeline').append(view.render().$el);
    });
    var my_posts = $("[rel=tooltip]");
    for(i=0;i<my_posts.length;i++){
        the_post = $(my_posts[i]);
        if(the_post.hasClass('invert')){
            the_post.tooltip({ placement: 'left'});
            the_post.css("cursor","pointer");
        }else{
            the_post.tooltip({ placement: 'right'});
            the_post.css("cursor","pointer");
        }
    }
    return this;
  }
});