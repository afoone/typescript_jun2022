# this

`this` no es una referencia a una función. 

**`this`es una referencia que se crea cuando una función es invocada, no cuando la función es declarada.**
**El valore de esa referncia depende del lugar en el que la función es invocada (call-site).**

```javascript
this
Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
this === window
true



this
Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
this === window
true
function f() {
    console.log(this)
}
undefined
f()
VM111960:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
// vemos antes que el this toma el valor desde donde se invoca la función (window)
undefined
// si uso 'strict' no usa el objeto window
undefined
"use strict"
'use strict'
"use strict"
function f2() {
    console.log(this)
}
'use strict'
f2()
VM112728:3 undefined
undefined
function Caballo(raza) {
    this.raza = raza
}
undefined
const babieca = Caballo('nose')
undefined
raza
'nose'
window.raza
'nose'
// raza se ha ido al objeto window
undefined
const potro = new Caballo("potro")
undefined
potro
Caballo {raza: 'potro'}raza: "potro"[[Prototype]]: Object
const yo = {
    nombre: "alfonso",
    edad: 48,
    hablar: function() {
        console.log(this.nombre)
    }
}
undefined
yo.hablar()
VM113937:5 alfonso
undefined
let saludar = yo.hablar
undefined
saludar()
VM113937:5 undefined
undefined
const f = () => {
    console.log(this)
}
VM114613:1 Uncaught SyntaxError: Identifier 'f' has already been declared
const arrow1 = () => {
    console.log(this)
}
undefined
arrow1()
VM114661:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
const contador = {
    cantidad: 0
    setInterval(()=> {
VM115120:3 Uncaught SyntaxError: Unexpected identifier
const contador = {
    cantidad: 0
    incrementar:  setInterval(()=> {
        console.log(++this.cantidad)
    }, 1000)
}
VM115678:3 Uncaught SyntaxError: Unexpected identifier
const contador = {
    cantidad: 0
    incrementar:  setInterval(()=> {
        console.log(++this.cantidad)
    }, 1000)
}
VM115785:3 Uncaught SyntaxError: Unexpected identifier
const contador = {
    cantidad: 0,
    incrementar:  setInterval(()=> {
        console.log(++this.cantidad)
    }, 1000)
}
undefined
104VM115840:4 NaN


```