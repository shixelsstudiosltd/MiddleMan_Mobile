define( ['Middleman', 'backbone', 'marionette', 'jquery', 'models/Model', 'hbs!templates/welcome'],
    function(Middleman, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Model({
                mobile: Middleman.mobile
            }),

            // View Event Handlers
            events: {

            }
        });
    });