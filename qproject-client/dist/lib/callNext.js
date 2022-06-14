"use strict";
exports.__esModule = true;
exports.callNext = void 0;
var callNext = function (servicio, waitingQueue) {
    var turno = waitingQueue.filter(function (t) { return t.servicio === servicio; }).reduce(function (acc, current) {
        return acc && (acc.id < current.id) ? acc : current;
    }, null);
    return turno;
};
exports.callNext = callNext;
//# sourceMappingURL=callNext.js.map