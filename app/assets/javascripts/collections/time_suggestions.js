PlanIt.Collections.TimeSuggestions = Backbone.Collection.extend({
  model: PlanIt.Models.TimeSuggestion,
  url: '/api/time_suggestions',
  comparator: function(time_suggestion){
    return -time_suggestion.get('time_likes');
  }
});
