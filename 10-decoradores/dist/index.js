"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Electric(constructorFunction) {
    console.log("- - invocado decorador");
    constructorFunction.prototype.electric = true;
}
function Ruedas(nRuedas) {
    return function (constructorFunction) {
        constructorFunction.prototype.ruedas = nRuedas;
    };
}
var Car = (function () {
    function Car(brand) {
        console.log("estoy en el constructor");
        this._brand = brand;
    }
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Car = __decorate([
        Ruedas(4),
        Electric
    ], Car);
    return Car;
}());
var car = new Car("mercedes");
console.log(car.brand);
console.log('ruedas', car['electric']);
console.log(car['ruedas']);
var car2 = new Car('toyota');
console.log(car2['electric']);
console.log('---------------- decoraddores de propiedad - -------------');
function Min(limit) {
    return function (target, propertyKey) {
        console.log({ target: target, propertyKey: propertyKey });
        var value;
        var getValue = function () {
            return value;
        };
        var setValue = function (newValue) {
            console.log({ limit: limit, newValue: newValue });
            if (newValue.length < limit) {
                value = "errro";
            }
            else {
                console.log({ newValue: newValue });
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getValue,
            set: setValue
        });
    };
}
var User = (function () {
    function User(username, password) {
        this.error = '';
        this.username = username;
        this.password = password;
    }
    __decorate([
        Min(8)
    ], User.prototype, "password", void 0);
    return User;
}());
var ana = new User('ana', '1234');
console.log(ana.error);
var laura = new User('laura', '123456789');
console.log(laura.error);
function Logger(target, propertyKey, properties) {
    console.log({ target: target, propertyKey: propertyKey, properties: properties });
    console.log("---- estoy entrando en el método " + propertyKey);
}
var Test = (function () {
    function Test() {
    }
    Test.prototype.suma = function (a, b) {
        return a + b;
    };
    __decorate([
        Logger
    ], Test.prototype, "suma", null);
    return Test;
}());
function ParameterDecorator(target, propertyKey, parameterIndex) {
    console.log({ target: target, propertyKey: propertyKey, parameterIndex: parameterIndex });
}
var ParameterTest = (function () {
    function ParameterTest() {
    }
    ParameterTest.prototype.method = function (param1, param2) {
    };
    __decorate([
        __param(0, ParameterDecorator)
    ], ParameterTest.prototype, "method", null);
    return ParameterTest;
}());
var test = new ParameterTest();
test.method("param1", 'param2');
//# sourceMappingURL=index.js.map