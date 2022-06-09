function* rango(n: number): Generator<number> {
    let index = 0
    while (index < n) {
        yield index++
    }
}
// undefined
// const gen = rango(5)
// undefined
// gen.next()
// {value: 0, done: false}
// gen.next()
// {value: 1, done: false}
// gen.next()
// {value: 2, done: false}
// gen.next()
// {value: 3, done: false}
// gen.next()
// {value: 4, done: false}
// gen.next()
// {value: undefined, done: true}

const gen = rango(9)
while(!gen.next().done) {
    
}