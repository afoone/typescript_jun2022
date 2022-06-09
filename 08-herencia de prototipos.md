```javascript

let medico = {
    numeroColegiado = "kdsjfldsf"
}
VM107852:2 Uncaught SyntaxError: Invalid shorthand property initializer
let medico = {
    numeroColegiado: "kdsjfldsf"
}
undefined
medico
{numeroColegiado: 'kdsjfldsf'}
medico.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const persona = {
    nombre: ""
    apellido: ""
VM108412:3 Uncaught SyntaxError: Unexpected identifier
}
VM108422:1 Uncaught SyntaxError: Unexpected token '}'
const persona = {
    nombre: ""
    apellido: ""}
VM108452:3 Uncaught SyntaxError: Unexpected identifier
const persona = {
    nombre: "",
    apellido: ""}
undefined
persona
{nombre: '', apellido: ''}
medico.__proto__ = persona
{nombre: '', apellido: ''}
medico
{numeroColegiado: 'kdsjfldsf'}
medico.nombre
''
medico.nombre = "Pepito"
'Pepito'
medico
{numeroColegiado: 'kdsjfldsf', nombre: 'Pepito'}
medico.nombre
'Pepito'
let persona2 = {
    nombre: "",
    apellido: "",
    nombreCompleto: () => (this.nombre + this.apellido)
    piernas: 2
VM109719:5 Uncaught SyntaxError: Unexpected identifier
let persona2 = {
    nombre: "",
    apellido: "",
    nombreCompleto: () => (this.nombre + this.apellido),
    piernas: 2}
undefined
medico.__proto__ = persona2
{nombre: '', apellido: '', piernas: 2, nombreCompleto: ƒ}
medico.nombre
'Pepito'
persona.piernas
undefined
medico.__proto__
{nombre: '', apellido: '', piernas: 2, nombreCompleto: ƒ}apellido: ""nombre: ""nombreCompleto: () => (this.nombre + this.apellido)piernas: 2[[Prototype]]: Object
medico.piernas
2
medico
{numeroColegiado: 'kdsjfldsf', nombre: 'Pepito'}
persona2.cabeza = true
true
medico.cabeza
true
medico.cabeza = false
false
medico
{numeroColegiado: 'kdsjfldsf', nombre: 'Pepito', cabeza: false}
persona2
{nombre: '', apellido: '', piernas: 2, cabeza: true, nombreCompleto: ƒ}
persona2.nombreCompleto()
NaN
medico.apellido = "perez"
'perez'
persona2.nombreCompleto()
NaN
```