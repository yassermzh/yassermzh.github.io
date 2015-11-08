require([
    'dojo/dom',
    'dojo/dom-construct',
    'dojo/_base/array',
    './person.js',
    './widgets/person-list-widget.js',
    'dojo/domReady!'
], function (dom, domConstruct, array, Person, PersonListWidget) {

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
            desc: "This is a description 2",
            isShy: false
        },
        {
            id: 3,
            name: "John2",
            desc: "This is a description 3",
            isShy: true
        },
        {
            id: 4,
            name: "John3",
            desc: "This is a description 4",
            isShy: true
        },
        {
            id: 5,
            name: "John4",
            desc: "This is a description 5",
            isShy: false,
            isRude: true
        }
    ];


    var personWidget = new PersonListWidget(
        persons,
        dom.byId('mypersonslistwidget'));
    personWidget.startup();

    // persons = array.map(persons, function(person){
    //     return new Person(person);
    // });

    // var personWidget = new PersonWidget(
    //     //{name: 'yasser'},
    //     persons[0],
    //     dom.byId('persons'));
    //personWidget.startup();

    // var person = new Person({id: 1, name: 'yasser'});

});
