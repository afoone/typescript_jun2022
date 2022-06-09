
interface HaceRuido {
    hacerRuido: ()=> string
}

interface Vivo {
    nacer: ()=> void
    morir: () => void
}

class Gato implements HaceRuido, Vivo {
    constructor(){
    }

    dormir() {

    }
    nacer(){

    }
    morir(){

    }

    hacerRuido(){
        return "miau"
    };
}

class Bacteria implements Vivo {
    nacer(){

    }
    morir(){

    }
}

class Coche implements HaceRuido {
    constructor(){ 
    }

    hacerRuido() {
        return "brrooom broom"
    }
}

const gato = new Gato()
const coche = new Coche()
const catarro = new Bacteria()

gato.dormir()

const trastosquehacenruido: HaceRuido[] = [gato, coche]

trastosquehacenruido.forEach(
    trasto => trasto.hacerRuido()
)