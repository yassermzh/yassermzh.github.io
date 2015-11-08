1- make a page that has a hardcoded array of objects like below. (create a couple more of this object)
    [{
        id: 1,
        name: "x",
        desc: "...",
        isShy: true
    }, ...]
2- a Person module (class) that gets the above object. Person class should have the below function:
b    whatIsYourName: function() {
        return this.isShy ? "hmmm" : this.name
    }
3- create a widget that has a template representing a Person (details of data populations are below)
4- using the object array, list all Person with your widget
5- the widget should have
    |_ plain text name & desc fields inside DOM nodes.
    |_ a "what?" button in front of name that shows the returning value of whatIsYourName() inside a popup.
    |_ a remove button that removes the widget from the list.
    |   |_ click event should be binded via template
    |- "shy" class on it's root DOM node based on the person.isShy
    |_ an edit button that changes the name & desc fields to text boxes. and shows a save/cancel button.
        |_ textboxes should have some validation on the user's input.
        |_ put a DOM node below the name text box, and say "{name} is a nice name too!" while the user is typing.
        |_ pressing "enter" on form fields should work like save button.
6- below the list, write a comma separated plain text list of not shy persons.
7- a DifferentPerson class that inherits Person with below additions:
    isRude: true,
    whatIsYourName: function() {
        return "not in your business";
    }
8- update whatIsYourName of the DifferentPerson to return the base class' value if this.isRude
9- programmatically add a couple DifferentPerson to the list.
