define(['Middleman', 'backbone', 'marionette', 'views/WelcomeView', 'views/MobileHeaderView'],
    function (Middleman, Backbone, Marionette, WelcomeView, MobileHeaderView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            Middleman.headerRegion.show(new MobileHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            Middleman.mainRegion.show(new WelcomeView());
        }
    });
});