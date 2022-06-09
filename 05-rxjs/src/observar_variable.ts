import {BehaviorSubject} from 'rxjs'

const mivariableobservada = new BehaviorSubject<string>("")

mivariableobservada.asObservable().subscribe(
    {
        next: res => console.log(res)
    }
)


// setTimeout(() => {
//     () => {
//         console.log( "en este momento, el valor es ", mivariableobservada.value)
//     }
// }, 10000);

setInterval(
    ()=> {
        mivariableobservada.next ((new Date()).getSeconds()+'')
    }, 
    3000
)

