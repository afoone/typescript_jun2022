"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = (function () {
    function Singleton() {
        this.atr = "";
    }
    Singleton.getInstance = function () {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
Singleton.getInstance().atr = "peopeoep";
//# sourceMappingURL=Singleton.js.map