// RxJS
import {of, from, Observable, Observer} from 'rxjs'
import {filter, map, reduce} from 'rxjs/operators'

const obs = of(1,2,3)

obs.subscribe(
    {
        next: (n) => console.log(n), 
        error: err => console.error(err),
        complete: () => console.log("ya ha terminado y me dejo de suscribir")
    }
)

type Beer = {
    name: string,
    country: string, 
    price: number, 
    quantity: number
}

const beers: Beer[]= [
    { name: "Stella", country: "Belgium", price: 2.5, quantity: 4 },
    { name: "Cruzcampo", country: "Spain", price: 1.0, quantity: 3 },
    { name: "Aguila", country: "Spain", price: 1.5, quantity: 1 },
    { name: "San Miguel", country: "Phillipines", price: 2.5, quantity: 1 },
  ];


const subscriptor: Partial<Observer<Beer>> =  {
    next: (n) => console.log(`${n.name} tiene un precio de ${n.price}`), 
    error: err => console.error(err),
    complete: () => console.log("ya ha terminado y me dejo de suscribir")
}

from(beers).subscribe(subscriptor)

const obsBeers: Observable<Beer> = from(beers)

console.log('---filter')
obsBeers.pipe(
    filter(i=> i.country === 'Spain')
).subscribe(subscriptor)

console.log('---map')
obsBeers.pipe(
    map(i=> ({...i, name:'Cerveza '+ i.name}))
).subscribe(subscriptor)

obsBeers.pipe(
    reduce(
        (acc, curr)=> acc + curr.quantity,
        0
    )
).subscribe(
    {
        next: (e) => console.log("Stock " + e)
    }
)



