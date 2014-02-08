PlanIt.Views.FavPlacesIndex = Backbone.View.extend ({

  template: JST['favorite_places/fav_places_index'],

  initialize: function() {
    this.listenTo(PlanIt.favorites, 'add remove', this.render);
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    PlanIt.favorites.each(function(place){
      var view = new PlanIt.Views.SidePlace({ model: place });
      that.$('#fav-places').append(view.render().$el);
    });
    return this;
  }
});