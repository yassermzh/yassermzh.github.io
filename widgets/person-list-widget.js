'use strict';
define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", "dijit/registry",
    'dojo/_base/array',
    'dojo/dom', "dojo/dom-construct",
    "dijit/_Widget", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "/widgets/person-widget.js",
    "dojo/text!/widgets/templates/person-list.html",
    "dijit/form/Button",
    "../person.js"
], function(declare, parser, ready, registry,
            array,
            dom, domConstruct,
            _Widget, _TemplatedMixin, _WidgetsInTemplateMixin,
            PersonWidget,
            template,
            Button,
            Person) {

    return declare("PersonListWidget", [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Person], {
        // put methods, attributes, etc. here
        //templateString: "<div><span data-dojo-attach-point='nameNode'></span></div>",
        templateString: template,

        constructor: function(params, srcNodeRef){
            this.persons  = params;
            console.log("creating persons list ");
        },

        // Attributes
        name: "unknown",
        //_setNameAttr: { node: "nameNode", type: "innerHTML" }
        popup: function(){
            window.alert('Name='+ this.whatIsYourName());
        },

        remove: function() {
            this.destroy();
        },

        postCreate: function() {

            window.registry = registry;

            var list = this.domNode;
            array.forEach(this.persons, function(person){
                console.log(person);
                // var node = domConstruct.create('div', {} ,
                //                                dom.byId('list'), 'after');
                // var widget = new PersonWidget(person, node);
                var personWidget = new PersonWidget(person);
                personWidget.placeAt(list);
                personWidget.startup();
                new Button({
                    label: 'remove',
                    onClick: function() {
                        console.log('remove button clicked');
                        //personWidget.destroyRendering(false);
                        personWidget.domNode.remove();
                        personWidget.destroyRecursive(false);
                    }
                }).placeAt(personWidget).startup();
            });

            // array.forEach(persons, function(person, id){
            //     console.log(person, id);
            //     var node = domConstruct.create('div', {}, dom.byId('list'), 'after');
            //     var widget = new PersonWidget(person, node);
            //     // var widget = new PersonWidget(person);
            //     // var list= dom.byId('persons0');
            //     // widget.startup();
            //     // domConstruct.place(widget, list);

            // });

        }

    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        console.log('parser called');
        parser.parse();
    });
});
