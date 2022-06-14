"use strict";
var ServicioAImpl = (function () {
    function ServicioAImpl() {
    }
    ServicioAImpl.prototype.action = function () {
        console.log("acción del servicio A");
    };
    return ServicioAImpl;
}());
var ServicioBImpl = (function () {
    function ServicioBImpl() {
    }
    ServicioBImpl.prototype.action = function () {
        console.log("acción del servicio B");
    };
    return ServicioBImpl;
}());
var Facade = (function () {
    function Facade(_sA, _sB) {
        this._sA = _sA;
        this._sB = _sB;
    }
    Facade.prototype.complexOperation = function () {
        this._sA.action();
        this._sB.action();
    };
    return Facade;
}());
//# sourceMappingURL=FacadePattern.js.map