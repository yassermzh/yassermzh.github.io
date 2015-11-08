//'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", 'dojo/_base/lang', 'dojo/on',
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/widgets/templates/person.html",
    "dijit/form/Button", "dijit/Dialog",
    //"dijit/_OnDijitClickMixin",
    "../person.js",
    "../person-rude.js"
], function(declare, parser, ready, lang, on,
            _Widget, _TemplatedMixin, _WidgetsInTemplateMixin,
            template,
            Button, Dialog,
            //_OnDijitClickMixin,
            Person, PersonRude
           )
       {

           return declare("PersonWidget", [_Widget
                                           //,_OnDijitClickMixin
                                           ,_TemplatedMixin
                                           , _WidgetsInTemplateMixin
                                          ], {

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
                   //window.alert('Name='+ this.whatIsYourName());
                   new Dialog({
                       title: "What's your name?",
                       content: this.whatIsYourName(),
                       style: "width: 300px"
                   }).show();
               },

               postCreate: function() {
                   if (this.isShy) {
                       this.domNode.className = "shy";
                   }

                   on(this.whatNode, 'click', lang.hitch(this, this.popup));

               }

               // destroy: function() {
               //     console.log('person-widget destroy get called');
               //     this.inherited(arguments);
               // }

           });
           ready(function(){
               // Call the parser manually so it runs after our widget is defined, and page has finished loading
               console.log('parser called');
               //parser.parse();
           });
       });
