'use strict';

define([
    "dojo/_base/declare",
    "dojo/_base/lang"
], function(declare, lang){
    return declare("Person", null, {

        id: null,
        name: null,
        desc: null,

        constructor: function(args) {
            //declare.safeMixin(this, args);
            lang.mixin(this, args);
        },

        whatIsYourName: function() {
            return this.isShy ? "hmmm" : this.name;
        }

    });

});
