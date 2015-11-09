//'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", 'dojo/_base/lang', 'dojo/on',
    'dojo/dom-style', 'dojo/dom-class',
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", // "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/widgets/templates/person.html",
    "dijit/form/Button", "dijit/Dialog", "dijit/form/TextBox",
    //"dijit/_OnDijitClickMixin",
    "../person.js",
    "../person-rude.js"
], function(
    declare, parser, ready, lang, on,
    domStyle, domClass,
    _Widget, _TemplatedMixin, // _WidgetsInTemplateMixin,
    template,
    Button, Dialog, TextBox,
    //_OnDijitClickMixin,
    Person, PersonRude
) {

    return declare("PersonWidget", [
        _Widget
        //,_OnDijitClickMixin
        ,_TemplatedMixin
        // , _WidgetsInTemplateMixin
    ], {

        templateString: template,
        _editButtonState: 'edit',

        name: 'unknown',
        _setNameAttr: {node: "nameNode", type: "innerHTML"},

        nameEditClass: "editHide",
        _setNameEditClassAttr: { node: "editNameNode", type: "class" },

        constructor: function(params, srcNodeRef){

            var person;
            if (params.isRude) {
                person = new PersonRude(params);
            } else {
                person = new Person(params);
            }
            lang.mixin(this, person);
        },

        popup: function(){
            //window.alert('Name='+ this.whatIsYourName());
            new Dialog({
                title: "What's your name?",
                content: this.whatIsYourName(),
                style: "width: 300px"
            }).show();
        },

        editHandler: function() {
            console.log('edit');
            this.set('nameEditClass', 'showHide');
            this.editButtonNode.set('label', 'save');
            this._editButtonState = 'save';
            this.editNameNode.focus();
            domClass.remove(this.cancelButtonNode, 'editHide');
        },

        saveHandler: function(){
            if (this.validate()) {
                return;
            }
            this.set('name', this.editNameNode.value);
            this.cancelHandler();
        },

        validate: function () {
            if (this.editNameNode.value.length>5) {
                return 'too Long!';
            } else if (this.editNameNode.value.length<4) {
                return 'too short';
            } else {
                return '';
            }
        },

        nameChangeHandler: function(e) {
            console.log('new name=', this.editNameNode.value);
            this.messageNode.innerHTML = this.validate();
            if (e.keyCode == 13) {
                this.saveHandler();
            }
        },

        cancelHandler: function() {
            this.set('nameEditClass', 'editHide');
            this.editButtonNode.set('label', 'edit');
            domClass.add(this.cancelButtonNode, 'editHide');
            this._editButtonState = 'edit';
        },

        postCreate: function() {
            if (this.isShy) {
                //this.domNode.className = "shy";
                domClass.add(this.domNode, 'shy');
            }
            //this.set('nameField', this.name);
            this.set('nameEditClass', 'editHide');
            domClass.add(this.cancelButtonNode, 'editHide');
            //domClass.add(this.editNameNode, 'editHide');

            on(this.whatNode, 'click', lang.hitch(this, this.popup));
            on(this.editButtonNode, 'click', function() {
                if (this._editButtonState == 'edit') {
                    lang.hitch(this, this.editHandler)();
                } else {
                    lang.hitch(this, this.saveHandler)();
                }
            }.bind(this));
            on(this.cancelButtonNode, 'click', lang.hitch(this, this.cancelHandler));
            on(this.editNameNode, 'keyup', lang.hitch(this, this.nameChangeHandler));

            if(this.id ==1 ) {
                window.personWidget = this;
            }

        },

        remove: function() {
            console.log('remove');
        },

        startup: function() {
            console.log("startup callled");

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
