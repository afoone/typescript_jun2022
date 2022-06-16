"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FactoryMethod_1 = require("./FactoryMethod");
var af_;
var ef_;
describe('factories', function () {
    beforeEach(function () {
        af_ = new FactoryMethod_1.ArcoFactory();
        ef_ = new FactoryMethod_1.EspadaFactory();
    });
    test('should arcos', function () {
        (function () {
            expect(af_.create()).toBeInstanceOf(FactoryMethod_1.Arco);
        });
    });
    test('should espadas', function () {
        (function () {
            expect(ef_.create()).toBeInstanceOf(FactoryMethod_1.Espada);
        });
    });
});
//# sourceMappingURL=FactoryMethod.test.js.map