window.PlanIt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    PlanIt.users = new PlanItApp.Collections.Users();
    PlanIt.users.fetch({
      success: function() {
        PlanIt.current_user = new PlanItApp.Models.CurrentUser();
        PlanIt.current_user.fetch({
          success: function() {
            new PlanIt.Routers.Users({ $sidebar: $('#sidebar'), $main: $('#main') });
            Backbone.history.start();
          }
        });
      }
    });
  }
};

$(document).ready(function(){
  PlanIt.initialize();
});
