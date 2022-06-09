export class Persona {

    // Visibilidad de las propiedades y de los métodos
    public edad: number
    private _nombre: string
    private _profesion = ""

    constructor(nombre: string, edad: number, profesion: string ='') {
        this._nombre = nombre
        this.edad = edad
        this._profesion = profesion
    }

    public get nombre(): string {
        return this._nombre
    }

    private set nombre(n: string) {
        this._nombre = n
    }

    public getProfession() {
        return this._profesion
    }

    public setProfession(_p:string) {
        this._profesion = _p
    }
}

const pepe = new Persona('pepe', 45)

pepe.getProfession()

// pepe.nombre = "kdujd" -> error el setter es privado
console.log(pepe.nombre)

pepe.edad = 11

