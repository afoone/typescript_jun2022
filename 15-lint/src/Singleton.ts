// Garantizar que de una clase sólo hay un objeto
export class Singleton {


    private static _instance: Singleton

    // prevenir que no se creen más instancias
    private constructor() {
        this.atr = ''
    }

    public atr : string

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton()
        }
        return Singleton._instance
    }
}

//const s = new Singleton()

Singleton.getInstance().atr = 'peopeoep'

//  console.log(Singleton.getInstance().atr)