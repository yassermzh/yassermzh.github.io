//'use strict';

define([
    "dojo/_base/declare", "dojo/parser", "dojo/ready", 'dojo/_base/lang', 'dojo/on',
    'dojo/dom-style', 'dojo/dom-class', 'dojo/dom-construct',
    "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/text!/widgets/templates/person.html",
    "dijit/form/Button", "dijit/Dialog", "dijit/form/TextBox",
    //"dijit/_OnDijitClickMixin",
    "../person.js",
    "../person-rude.js"
], function(
    declare, parser, ready, lang, on,
    domStyle, domClass, domConstruct,
    _Widget, _TemplatedMixin, _WidgetsInTemplateMixin,
    template,
    Button, Dialog, TextBox,
    //_OnDijitClickMixin,
    Person, PersonRude
) {

    return declare("PersonWidget", [
        _Widget
        //,_OnDijitClickMixin
        ,_TemplatedMixin
        , _WidgetsInTemplateMixin
    ], {

        templateString: template,
        _editButtonState: 'edit',

        name: 'unknown',
        _setNameAttr: {node: "nameNode", type: "innerHTML"},

        // nameEditClass: "hide",
        // _setNameEditClassAttr: { node: "editNameNode", type: "class" },

        // cancelButtonClass: "hide",
        // _setCancelButtonClassAttr: { node: "cancelButtonNode", type: "class" },

        constructor: function(params, srcNodeRef){

            var person = params.person;
            var mixin = params.mixin;
            if (person.isRude) {
                person = new PersonRude(person);
            } else {
                person = new Person(person);
            }
            lang.mixin(this, person);
            lang.mixin(this, mixin);
        },

        popup: function(){
            //window.alert('Name='+ this.whatIsYourName());
            new Dialog({
                title: "What's your name?",
                content: this.whatIsYourName(),
                style: "width: 300px"
            }).show();
        },

        cancelButton: null,
        nameTextBox: null,

        editHandler: function() {

            if (this._editButtonState == 'edit') {
                domClass.add(this.nameNode, 'hide');
                this.nameTextBox = new TextBox({
                    value: this.name,
                    placeHolder: 'name...'
                });
                this.nameTextBox.placeAt(this.nameNode, 'after');
                this.messageBox = domConstruct.toDom('<span></span>');

                domConstruct.place(this.messageBox, this.nameTextBox.domNode, 'after');
                on(this.nameTextBox, 'keyup', lang.hitch(this, this.nameChangeHandler));

                this.cancelButton = new Button({
                    label: 'cancel',
                    onClick: lang.hitch(this, this.cancelHandler)
                });
                this.cancelButton.startup();
                this.cancelButton.placeAt(this.messageBox, 'after');
                this.editButtonNode.set('label', 'save');
                this._editButtonState = 'save';
                this.nameTextBox.focus();
            } else {
                this.saveHandler();
            }

        },

        validate: function() {
            var name = this.nameTextBox.get('value');
            if (name.length>5) {
                return {message: 'too long!', hasError: true};
            } else if (name.length<4) {
                return {message: 'too short!', hasError: true};
            } else {
                return {message: '', hasError: false};
            }
        },

        saveHandler: function() {
            if (this.validate().hasError) return;
            this.set('name', this.nameTextBox.get('value'));
            this.cancelHandler();
        },

        nameChangeHandler: function(e) {
            this.messageBox.innerHTML = this.validate().message;
            if (e.keyCode == 13) {
                this.saveHandler();
            }
        },

        cancelHandler: function() {
            console.log('cancel clicked');
            domClass.remove(this.nameNode, 'hide');
            this._editButtonState = 'edit';
            this.editButtonNode.set('label', 'edit');
            this.nameTextBox.destroy();
            this.cancelButton.destroy();
            this.messageBox.remove();
        },

        postCreate: function() {
            if (this.isShy) {
                domClass.add(this.domNode, 'shy');
            }
            on(this.whatNode, 'click', lang.hitch(this, this.popup));
        },

        remove: function() {
            console.log('remove');
            // this.domNode.remove();
            // this.destroyRecursive(false);
            this.removeWidget(this);
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
