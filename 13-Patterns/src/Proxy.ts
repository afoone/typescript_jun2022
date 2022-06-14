 interface Store {
    save()
 } 

 class TextStore implements Store {
    save() {
        /// graba de verdad y es peligroso
    }
 }

class TextStoreProxy implements Store {



    constructor(private store: TextStore){
    }

    save() {
        // hago las comprobaciones de seguridad que me interesen 
        // o cualquier otro tipo de cosas
        this.store.save()
    }
}

