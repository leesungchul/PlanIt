PlanIt.Views.FavPlacesIndex = Backbone.View.extend ({

  template: JST['favorite_places/fav_places_index'],

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function() {
    var that = this;
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(place){
      var view = new PlanIt.Views.SidePlace({
        model: place,
        collection: that.collection
      });
      that.$('#fav-places').append(view.render().$el);
    });
    return this;
  }
});