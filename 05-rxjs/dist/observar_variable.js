"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const mivariableobservada = new rxjs_1.BehaviorSubject("");
mivariableobservada.asObservable().subscribe({
    next: res => console.log(res)
});
// setTimeout(() => {
//     () => {
//         console.log( "en este momento, el valor es ", mivariableobservada.value)
//     }
// }, 10000);
setInterval(() => {
    mivariableobservada.next((new Date()).getSeconds() + '');
}, 3000);
