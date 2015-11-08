define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "./person.js"
], function(declare, lang, Person){
    return declare("PersonRude", [Person], {

        isRude: true,

        constructor: function(args) {
            //declare.safeMixin(this, args);
            this.inherited(arguments);
        },

        whatIsYourName: function() {
            return "not int your business";
        }

    });

});
