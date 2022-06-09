"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const obs = (0, rxjs_1.of)(1, 2, 3);
obs.subscribe({
    next: (n) => console.log(n),
    error: err => console.error(err),
    complete: () => console.log("ya ha terminado y me dejo de suscribir")
});
const beers = [
    { name: "Stella", country: "Belgium", price: 2.5, quantity: 4 },
    { name: "Cruzcampo", country: "Spain", price: 1.0, quantity: 3 },
    { name: "Aguila", country: "Spain", price: 1.5, quantity: 1 },
    { name: "San Miguel", country: "Phillipines", price: 2.5, quantity: 1 },
];
const subscriptor = {
    next: (n) => console.log(`${n.name} tiene un precio de ${n.price}`),
    error: err => console.error(err),
    complete: () => console.log("ya ha terminado y me dejo de suscribir")
};
(0, rxjs_1.from)(beers).subscribe(subscriptor);
const obsBeers = (0, rxjs_1.from)(beers);
console.log('---filter');
obsBeers.pipe((0, operators_1.filter)(i => i.country === 'Spain')).subscribe(subscriptor);
console.log('---map');
obsBeers.pipe((0, operators_1.map)(i => ({ ...i, name: 'Cerveza ' + i.name }))).subscribe(subscriptor);
obsBeers.pipe((0, operators_1.reduce)((acc, curr) => acc + curr.quantity, 0)).subscribe({
    next: (e) => console.log("Stock " + e)
});
