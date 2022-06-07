//interface // type

// interface Persona {
//     name: string
//     age: number
// }

// type Persona = {
//     name: string
//     age: number
// }


// age es opcional
// interface Persona {
//     name: string
//     age?: number
// }

type Persona = {
    name: string
    age?: number 
}

let pepe: Persona 

pepe = {
    name: "pepe",
    age: 58
}

const juanita: Persona = {
    name: "juanita"
}

