var app = require('commander');
app.version('0.0.1').description('API de cliente de colas')
    .option("-m --message <message>", "pon un mensaje").action(function (options) {
    console.log(options.message);
});
app.parse(process.argv);
