enum Keys {
    UP, 
    DOWN,
    LEFT, 
    RIGHT
}

let keyPressed: Keys

keyPressed = Keys.LEFT

const enum RespuestaTest {
    TRUE,
    FALSE
}

const _resp1 = RespuestaTest.FALSE
const _resp2 = RespuestaTest.TRUE

// Tuplas
// Un array tiene un número indeterminado de elementos
// Una tupla no, tien un número concreto de elementos
const tup : [number] = [1]
const tup2: [number, string] = [5, "cinco"]
console.log(tup)
console.log(tup2)

//const [state, setState] = useState('')
