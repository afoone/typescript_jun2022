"use strict";
var Boton = (function () {
    function Boton() {
    }
    Boton.prototype.render = function () {
        throw new Error('Method not implemented.');
    };
    return Boton;
}());
var Div = (function () {
    function Div() {
    }
    Div.prototype.render = function () { };
    return Div;
}());
var Form = (function () {
    function Form() {
        this._children = [];
    }
    Form.prototype.addElement = function (el) {
        this._children.push(el);
    };
    Form.prototype.removeElement = function (idx) {
        this._children.splice(idx, 1);
    };
    Form.prototype.render = function () { };
    return Form;
}());
var Input = (function () {
    function Input() {
    }
    Input.prototype.render = function () { };
    return Input;
}());
//# sourceMappingURL=Composite.js.map