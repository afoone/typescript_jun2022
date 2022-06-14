"use strict";
exports.__esModule = true;
exports.recibirTurno = void 0;
var axios_1 = require("axios");
var inquirer = require("inquirer");
var callNext_1 = require("./callNext");
var recibirTurno = function (service, waitingQueue) {
    inquirer
        .prompt([
        {
            name: 'turno',
            message: "\n                \u00BFA qui\u00E9n quieres llamar?\n                0 - Al siguiente\n                Otros: introducir el n\u00FAmero de turno\n                "
        },
    ])
        .then(function (answers) {
        console.log(answers);
        if (answers.turno === '0') {
            var nuevoTurno_1 = (0, callNext_1.callNext)(service, waitingQueue);
            if (nuevoTurno_1) {
                axios_1["default"]
                    .post('http://localhost:4000/llamados', nuevoTurno_1)
                    .then(function () {
                    return axios_1["default"]["delete"]("http://localhost:4000/turnos/".concat(nuevoTurno_1.id));
                });
            }
        }
    });
};
exports.recibirTurno = recibirTurno;
//# sourceMappingURL=recibirTurno.js.map