"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
test('should be an singleton', function () {
    expect(Singleton_1.Singleton.getInstance() === Singleton_1.Singleton.getInstance());
});
//# sourceMappingURL=Singleton.test.js.map