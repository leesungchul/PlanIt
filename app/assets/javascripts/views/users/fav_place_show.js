PlanIt.Views.FavPlaceShow = Backbone.View.extend ({
  template: JST['favorite_places/show'],

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render)
  },

  events: {
    'submit #place-pic': 'addPlacePic',
    'change input[type=file]': 'encodeFile',
    'click #add-place': 'addPlace',
    'click #remove-place': 'removePlace'
  },

  render: function() {
    var that = this;
    var content = this.template({
      place: this.model
    });
    this.$el.html(content);
    this.model.get('place_pics').each(function(pic){
      var view = new PlanIt.Views.SidePic({
        model: pic,
        place: that.model
      });
      that.$('#picture-gallery').append(view.render().$el);
    });
    if (PlanIt.favorites.contains(this.model) == false){
      this.$('.add-remove').html("<button type='button' class='btn btn-primary' id='add-place'>Add to Favorites</button>");
    } else {
      this.$('.add-remove').html("<button type='button' class='btn btn-primary' id='remove-place'>Remove from Favorites</button>");
    }
    return this;
  },

  encodeFile: function(event) {
    this.place_pic = new PlanIt.Models.PlacePic()
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      that.place_pic.set({ photo: e.target.result, place_id: that.model.id });
    }
    reader.onerror = function(resp) {
      console.log("error", resp);
      console.log(resp.getMessage());
    }
    reader.readAsDataURL(file)
  },

  addPlacePic: function(event) {
    var that = this;
    event.preventDefault();
    var data = $('#place-pic').serializeJSON();
    this.model.get('place_pics').create(that.place_pic, {
      success: function() {
        that.render();
      },
      error: function() {
        console.log("fail")
      }
    });
  },

  addPlace: function(event){
    event.preventDefault();
    var id = this.model.id;
    var sendURL = "/api/favorite_places/";
    var that = this;
    $.ajax ({
      type: 'post',
      data: {favorite_place: { user_id: PlanIt.current_user.id, place_id: id }},
      url: sendURL,
      success: function(response) {
        PlanIt.favorites.add(PlanIt.places.get(id));
      }
    });
  },

  removePlace: function(event){
    event.preventDefault();
    var id = this.model.id;
    var sendURL = "/api/favorite_places/0";
    var that = this;
    $.ajax ({
      type: 'delete',
      data: {user_id: PlanIt.current_user.id, place_id: id },
      url: sendURL,
      success: function(response) {
        that.collection.remove(that.model.id)
      }
    });
  }


});