/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface ServicioA {
    action() : void
}

interface ServicioB {
    action () : void
}

class ServicioAImpl implements ServicioA  {
    action(): void {
        console.log('acción del servicio A')
    }

}

class ServicioBImpl implements ServicioB {
    action(): void {
        console.log('acción del servicio B')
    }
    
}


// SPOC Punto único de contacto - Estoy quitando complejidad para los que tienen que acceder a los servico
class Facade {


    constructor(private _sA: ServicioA, private _sB: ServicioB) {
    }

    complexOperation() {
        this._sA.action()
        this._sB.action()
    }


}