PlanIt.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],

  events: {
    'keyup #find-user': 'findUser',
    'click #reset-list': 'resetList'
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(PlanIt.friends, "add remove", this.render);
  },

  render: function(){
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(user){
      var view = new PlanIt.Views.SideUser({ model: user });
      that.$('#all-users').append(view.render().$el);
    });
    this.listenForScroll();
    return this;
  },

  foundRender: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    PlanIt.search.each(function(user){
      var view = new PlanIt.Views.FoundUser({ model: user });
      that.$('#all-users').append(view.render().$el);
    });
    return this;
  },

  listenForScroll: function() {
    $('.scrollable2').off("scroll");
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $('.scrollable2').on("scroll", throttledCallback);
  },

  nextPage: function() {
    var that = this;
    if ($('.scrollable2').scrollTop() > $('body').height() - $('.scrollable2').height() - 50) {
      if (that.collection.page < that.collection.total_pages) {
        that.collection.fetch({
          data: { page: that.collection.page + 1 },
          remove: false,
          wait: true,
          success: function () {
            console.log("successfully fetched page " + that.collection.page);
          }
        });
      }
    }
  },

  resetList: function() {
    this.render();
  },

  findUser: _.debounce(function(event){
    event.preventDefault();
    var that = this;
    var data = { search_str: this.$('#find-user').val() }
    $.ajax ({
      type: "get",
      url: "/users/find_user",
      data: data,
      success: function(response) {
        if (response.length != 0) {
          if (PlanIt.search) {
            PlanIt.search.reset();
          }
          PlanIt.search = new PlanIt.Collections.Users(response);
          that.foundRender();
        } else {
          that.render();
          console.log("no such user")
        }
      }
    });
  }, 500)
});

