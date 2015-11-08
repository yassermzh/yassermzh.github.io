//'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", 'dojo/_base/lang',
    "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!/widgets/templates/person.html",
    "dijit/form/Button",
    "../person.js"
], function(declare, parser, ready, lang,
            _WidgetBase, _TemplatedMixin,
            template,
            Button,
            Person
           ){

    return declare("PersonWidget", [_WidgetBase, _TemplatedMixin, Person], {
        // put methods, attributes, etc. here
        //templateString: "<div><span data-dojo-attach-point='nameNode'></span></div>",
        templateString: template,

        constructor: function(params, srcNodeRef){
            var person = new Person(params);
            lang.mixin(this, person);

            console.log("creating widget with params " + JSON.stringify(params) + " on node " + srcNodeRef);
        },

        // Attributes
        name: "unknown",
        //_setNameAttr: { node: "nameNode", type: "innerHTML" }
        popup: function(){
            window.alert('Name='+ this.whatIsYourName());
        },

        postCreate: function() {
            if (this.isShy) {
                this.domNode.className = "shy";
            }
        }
        // destroy: function() {
        //     console.log('person-widget destroy get called');
        //     this.inherited(arguments);
        // }

    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        console.log('parser called');
        parser.parse();
    });
});
