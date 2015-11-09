'use strict';
define([
    "dojo/_base/declare", "dojo/_base/lang", "dojo/parser", "dojo/ready", "dijit/registry",
    'dojo/_base/array',
    'dojo/dom', "dojo/dom-construct",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "/widgets/person-widget.js",
    "dojo/text!/widgets/templates/person-list.html",
    "dijit/form/Button"
], function(declare, lang, parser, ready, registry,
            array,
            dom, domConstruct,
            _Widget, _TemplatedMixin, _WidgetsInTemplateMixin,
            PersonWidget,
            template,
            Button) {

    return declare("PersonListWidget", [
        _Widget,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ], {
        templateString: template,

        constructor: function(params, srcNodeRef){
            this.persons  = params;
            console.log("creating persons list ");
        },

        // list all shy people
        listShyPeople: function() {
            var shyPeopleNames = array
                    .filter(this.persons, function(person){
                        return person.isShy;
                    })
                    .map(function(person){
                        return person.name;
                    })
                    .join(', ');

            this.shyPeopleNode.innerHTML = shyPeopleNames;
        },

        postCreate: function() {

            var allPeopleNode = this.allPeopleNode;

            function removeWidget(w) {
                console.log('remove button clicked');
                //personWidget.destroyRendering(false);
                w.domNode.remove();
                w.destroyRecursive(false);
                var wId = w.get('id');
                this.persons = array.filter(this.persons, function(person) {
                    return person.id != wId;
                });
                this.listShyPeople();

            }
            var self = this;
            // populate persons
            array.forEach(this.persons, function(person){
                var personWidget = new PersonWidget({
                    person: person,
                    mixin: {removeWidget: lang.hitch(self,removeWidget)}
                });
                personWidget.placeAt(allPeopleNode);
                personWidget.startup();

                new Button({
                    label: 'remove',
                    onClick: function() {
                        //removeWidget.call(self, personWidget);
                        lang.hitch(self, removeWidget)(personWidget);
                    }
                }).placeAt(personWidget).startup();
            });

            this.listShyPeople();
            window.registry = registry;

        }


    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        console.log('parser called');
        parser.parse();
    });
});
