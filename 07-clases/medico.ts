import { Persona } from "./persona";

class Medico extends Persona {
    public numeroColegiado: string;

    constructor(nombre:string,edad:number, ncol:string){
        super(nombre, edad, "medico")
        this.numeroColegiado = ncol
    }

}

const laura = new Medico("laura", 34, "lkjsdfl")
laura.getProfession()