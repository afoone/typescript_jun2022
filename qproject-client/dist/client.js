"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var app = require('commander');
// necesitaremos una acción que cree el turno , 
// nos tendrá que indicar el servicio que quiere
app.version('0.0.1').description('API de cliente de colas')
    .option("-s --service <servicio>", "Servicio al que se quiere acceder").action(function (options) {
    console.log(options);
    var turno = {
        servicio: options.servicio
    };
    axios_1["default"].post('http://localhost:4000/turnos', turno).then(function (res) {
        var turno_devuelto = res.data;
        console.log(turno_devuelto);
    });
    console.log(turno);
});
app.parse(process.argv);
