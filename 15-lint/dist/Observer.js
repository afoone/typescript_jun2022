"use strict";
var Subject = (function () {
    function Subject() {
        this._suscriptors = [];
    }
    Subject.prototype.suscribe = function (s) {
        this._suscriptors.push(s);
    };
    Subject.prototype.notifyAll = function () {
        this._suscriptors.forEach(function (s) { return s.notify(); });
    };
    return Subject;
}());
var SubscriberObj = (function () {
    function SubscriberObj() {
    }
    SubscriberObj.prototype.notify = function () {
        console.log("estoy notificado");
    };
    return SubscriberObj;
}());
var sbj = new Subject();
var sus = new SubscriberObj();
sbj.suscribe(sus);
sbj.notifyAll();
//# sourceMappingURL=Observer.js.map