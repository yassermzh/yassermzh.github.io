'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!/widgets/templates/person.html"
], function(declare, parser, ready, _WidgetBase, _TemplatedMixin, template){

    return declare("PersonWidget", [_WidgetBase, _TemplatedMixin], {
        // put methods, attributes, etc. here
        //templateString: "<div><span data-dojo-attach-point='nameNode'></span></div>",
        templateString: template,

        // Attributes
        name: "unknown",
        _setNameAttr: { node: "name", type: "innerHTML" }

    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        console.log('parser called');
        parser.parse();
    });
});
