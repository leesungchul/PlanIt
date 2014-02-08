PlanIt.Views.FavPlaceShow = Backbone.View.extend ({
  template: JST['favorite_places/show'],

  events: {
    'submit #place-pic': 'addPlacePic',
    'change input[type=file]': 'encodeFile'
  },

  render: function() {
    var that = this;
    var content = this.template({
      place: this.model
    });
    this.$el.html(content);
    console.log(PlanIt.place_pics)
    PlanIt.place_pics.where({place_id: this.model.id}).forEach(function(pic){
      console.log(pic)
      var view = new PlanIt.Views.SidePic({
        model: pic,
        place: that.model
      });
      that.$('#picture-gallery').append(view.render().$el);
    });

    return this;
  },

  encodeFile: function(event) {
    this.place_pic = new PlanIt.Models.PlacePic()
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    console.log("here")
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
    console.log(that.place_pic)
    console.log(data)
    PlanIt.place_pics.create(that.place_pic, {
      success: function() {
        that.render();
        Backbone.history.navigate("#/favorite_places", {trigger: true });
      },
      error: function() {
        console.log("fail")
      }
    });
  }


});