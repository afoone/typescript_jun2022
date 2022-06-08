
let array: number[] = [1,2,3,4]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

let index:number = 0
while (index < 0) {
    console.log(index)
    index++
}
// index = 0
// console.log(index)

do {
    index++
} while (index<0);
// index = 1
// console.log(index)

// constantes
// ¿Como hago un loop?
// foreach, map, reduce, filter...

array.forEach(
    e => console.log(e)
)
// el array no se modifica

array.map(
    e => e*2
)

// (4) [2, 4, 6, 8]
// array
// (4) [1, 2, 3, 4]

// otro aspecto funcional es la inmutabilidad -> ninguna variable cambia -> me devuelve un 
// array nuevo
array.filter(
    e => e % 2 ===0)

array.reduce(
    (acc, curr) => acc + curr,
    0
)

// imprimir hola 3 veces
for (let index = 0; index < 3; index++) {
  console.log('hola')
    
}

// [...Array(3).fil()]


// function calculateAge(birthDate: Date) {
//     const diff = Date.now() - birthDate.getTime()
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
// }

function calculateAge(birthDate: Date, currentDate: Date) {
    const diff = currentDate.getTime() - birthDate.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// ## VUEX -  Implementación de redux (patrón flux) para Vue // redux- ngrx
// Reactive programming - RxJS

