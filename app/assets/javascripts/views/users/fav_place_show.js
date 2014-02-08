PlanIt.Views.FavPlaceShow = Backbone.View.extend ({
  template: JST['favorite_places/show'],

  initialize: function(){
    this.place_pic = new PlanIt.Models.PlacePic()
    this.listenTo(PlanIt.place_pics, 'add remove', this.render);
  },

  events: {
    'submit #submit-pic': 'addPlacePic',
    'change input[type=file]': 'encodeFile'
  },

  render: function() {
    var content = this.template({
      place: this.model
    });
    this.$el.html(content);
    return this;
  },

  encodeFile: function(event) {
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      this.place_pic.set({ photo: e.target.result, place_id: that.model.id });
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
    PlanIt.place_pics.add()
  }


});