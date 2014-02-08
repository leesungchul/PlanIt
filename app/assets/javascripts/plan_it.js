window.PlanIt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $( '.scrollable1' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault();
    });
    $( '.scrollable2' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault();
    });
    PlanIt.users = new PlanIt.Collections.Users();
    PlanIt.users.fetch({
      remove: false,
      data: { page: 1 },
      success: function() {
        PlanIt.current_user = new PlanIt.Models.CurrentUser();
        PlanIt.current_user.fetch({
          success: function() {
            PlanIt.place_pics = new PlanIt.Collections.PlacePics();
            PlanIt.place_pics.fetch({
              success: function() {
                PlanIt.event_pics = new PlanIt.Collections.EventPics();
                PlanIt.event_pics.fetch({
                  success: function() {
                    new PlanIt.Routers.Users({ $sidebar: $('#sidebar'), $main: $('#main') });
                    Backbone.history.start();
                  }
                });
              }
            });
          }
        });
      }
    });
  }
};
