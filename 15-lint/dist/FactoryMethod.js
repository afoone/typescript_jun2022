"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcoFactory = exports.EspadaFactory = exports.Arco = exports.Espada = void 0;
var Espada = (function () {
    function Espada() {
    }
    Espada.prototype.getName = function () {
        return "Espada";
    };
    Espada.prototype.getDamage = function () {
        return 10;
    };
    Espada.prototype.getRange = function () {
        return 2;
    };
    return Espada;
}());
exports.Espada = Espada;
var Arco = (function () {
    function Arco() {
    }
    Arco.prototype.getDamage = function () {
        return 8;
    };
    Arco.prototype.getName = function () {
        return "arco";
    };
    Arco.prototype.getRange = function () {
        return 30;
    };
    return Arco;
}());
exports.Arco = Arco;
var EspadaFactory = (function () {
    function EspadaFactory() {
    }
    EspadaFactory.prototype.create = function () {
        return new Espada();
    };
    return EspadaFactory;
}());
exports.EspadaFactory = EspadaFactory;
var ArcoFactory = (function () {
    function ArcoFactory() {
    }
    ArcoFactory.prototype.create = function () {
        return new Arco();
    };
    return ArcoFactory;
}());
exports.ArcoFactory = ArcoFactory;
var af = new ArcoFactory();
var ef = new EspadaFactory();
var factories = [af, ef, af];
var armas = factories.map(function (f) { return f.create(); });
//# sourceMappingURL=FactoryMethod.js.map