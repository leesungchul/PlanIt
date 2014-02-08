PlanIt.Models.PlacePic = Backbone.Model.extend({
  parse: function(response) {
    return {
      id: response.id,
      place_id: response.place_id,
      bigurl: response.bigurl,
      smallurl: response.smallurl
    }
  }
});
