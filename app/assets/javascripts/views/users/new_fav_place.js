PlanIt.Views.NewFavPlace = Backbone.View.extend ({
  template: JST['favorite_places/new'],

  events: {
    'submit #add-fav-place': 'addPlace'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  addPlace: function(event){
    var that = this;
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();
    PlanIt.favorites.create(data, {
      success: function(response){
        $.ajax({
          type: "post",
          url: "/api/favorite_places",
          data: { favorite_place: { place_id: response.id }},
        });
        Backbone.history.navigate("#/favorite_places/" + response.id, { trigger: true });
      }
    });
  }
});