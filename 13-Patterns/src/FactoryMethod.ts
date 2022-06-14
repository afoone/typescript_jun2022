export interface  Weapon {
    getName(): string
    getDamage():  number
    getRange(): number
}

export class Espada implements Weapon {
    getName() {
        return "Espada"
    }

    getDamage(): number {
        return 10
    }

    getRange(): number {
        return 2
    }
}

export class Arco implements Weapon {
    getDamage(): number {
        return 8
    }
    getName(): string {
        return "arco"
    }
    getRange(): number {
        return 30
    }
}

export interface WeaponFactory {
    create(): Weapon
}

export class EspadaFactory implements WeaponFactory {
    create(): Weapon {
        return new Espada()
    }
}

export class ArcoFactory implements WeaponFactory {
    create(): Weapon {
        return new Arco()
    }
}

const af = new ArcoFactory()
const ef = new EspadaFactory()
const factories = [af, ef, af]

const armas: Weapon[] = factories.map(
    f => f.create()
)

// console.log({armas})