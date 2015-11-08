//'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", 'dojo/_base/lang',
    "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!/widgets/templates/person.html",
    "dijit/form/Button",
    "../person.js",
    "../person-rude.js"
], function(declare, parser, ready, lang,
            _Widget, _TemplatedMixin,
            template,
            Button,
            Person, PersonRude
           )
       {

           return declare("PersonWidget", [_Widget, _TemplatedMixin], {

               templateString: template,

               constructor: function(params, srcNodeRef){

                   var person;
                   if (params.isRude) {
                       person = new PersonRude(params);
                   } else {
                       person = new Person(params);
                   }

                   lang.mixin(this, person);

                   console.log("creating widget with params " + JSON.stringify(params) + " on node " + srcNodeRef);
               },

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
