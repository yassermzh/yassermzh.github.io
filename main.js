'use strict';

require([
    'dojo/dom',
    'dojo/dom-construct',
    'dojo/_base/array',
    './person.js',
    './widgets/person-widget.js',
    'dojo/domReady!'
], function (dom, domConstruct, array, Person, PersonWidget) {

    var persons = [
        {
            id: 1,
            name: "Yasser",
            desc: "This is a description",
            isShy: true
        },
        {
            id: 2,
            name: "John",
            desc: "This is a description",
            isShy: false
        }
    ];

    // persons = array.map(persons, function(person){
    //     return new Person(person);
    // });

    array.forEach(persons, function(person, id){
        console.log(person, id);
        var node = domConstruct.create('div', {}, dom.byId('persons0'), 'after');
        var widget = new PersonWidget(person, node);
        // var widget = new PersonWidget(person);
        // var list= dom.byId('persons0');
        // widget.startup();
        // domConstruct.place(widget, list);

    });
    // var personWidget = new PersonWidget(
    //     //{name: 'yasser'},
    //     persons[0],
    //     dom.byId('persons'));
        //personWidget.startup();

    // var person = new Person({id: 1, name: 'yasser'});

});
