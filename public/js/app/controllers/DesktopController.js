define(['Middleman', 'backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView'],
    function (Middleman, Backbone, Marionette, WelcomeView, DesktopHeaderView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            Middleman.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            Middleman.mainRegion.show(new WelcomeView());
        }
    });
});