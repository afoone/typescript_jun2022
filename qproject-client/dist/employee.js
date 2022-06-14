"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var recibirTurno_1 = require("./lib/recibirTurno");
var app = require('commander');
app
    .version('0.0.1')
    .description('empleado de colas')
    .option('-s --service <service>', 'Servicio sobre el cual queremos llamar a un cliente')
    .action(function (options) {
    console.log('action triggered');
    axios_1["default"].get('http://localhost:4000/turnos').then(function (res) { return (0, recibirTurno_1.recibirTurno)(options.service, res.data); });
});
app.parse(process.argv);
//# sourceMappingURL=employee.js.map