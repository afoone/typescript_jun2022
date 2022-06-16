"use strict";
var TextStore = (function () {
    function TextStore() {
    }
    TextStore.prototype.save = function () {
    };
    return TextStore;
}());
var TextStoreProxy = (function () {
    function TextStoreProxy(store) {
        this.store = store;
    }
    TextStoreProxy.prototype.save = function () {
        this.store.save();
    };
    return TextStoreProxy;
}());
//# sourceMappingURL=Proxy.js.map