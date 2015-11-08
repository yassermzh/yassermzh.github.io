'use strict';
define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", "dijit/registry",
    'dojo/_base/array',
    'dojo/dom', "dojo/dom-construct",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", //"dijit/_WidgetsInTemplateMixin",
    "/widgets/person-widget.js",
    "dojo/text!/widgets/templates/person-list.html",
    "dijit/form/Button"
], function(declare, parser, ready, registry,
            array,
            dom, domConstruct,
            _Widget, _TemplatedMixin, //_WidgetsInTemplateMixin,
            PersonWidget,
            template,
            Button) {

    return declare("PersonListWidget", [
    _Widget, _TemplatedMixin, //_WidgetsInTemplateMixin
    ], {
        templateString: template,

        constructor: function(params, srcNodeRef){
            this.persons  = params;
            console.log("creating persons list ");
        },

        popup: function(){
            window.alert('Name='+ this.whatIsYourName());
        },

        postCreate: function() {

            var list = this.domNode;

            function removePerson() {
                console.log('remove button clicked');
                //personWidget.destroyRendering(false);
                personWidget.domNode.remove();
                personWidget.destroyRecursive(false);
            }

            // populate persons
            array.forEach(this.persons, function(person){
                var personWidget = new PersonWidget(person);
                personWidget.placeAt(list);
                personWidget.startup();
                new Button({
                    label: 'remove',
                    onClick: removePerson
                }).placeAt(personWidget).startup();
            });

            // list all shy people
            var shyPersonNames = array
                    .filter(this.persons, function(person){
                        return person.isShy;
                    })
                    .map(function(person){
                        return person.name;
                    })
                    .join(', ');

            domConstruct.create('p', {
                innerHTML: shyPersonNames
            }, list, 'after');

            window.registry = registry;

        }

    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        console.log('parser called');
        parser.parse();
    });
});
