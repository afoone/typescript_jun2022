

// Añadir una propiedad con el decorador

function Electric(constructorFunction: Function) {
    console.log("- - invocado decorador")
    constructorFunction.prototype.electric = true
}

function Ruedas(nRuedas: number) {
    return function (constructorFunction: Function) {
        constructorFunction.prototype.ruedas = nRuedas
    }
}


@Ruedas(4)
@Electric
class Car { 
    private _brand: string

    constructor(brand: string) {
        console.log("estoy en el constructor")
        this._brand = brand
    }

    public get brand() {
        return this._brand
    }
}

let car : Car =  new Car("mercedes")

console.log(car.brand)
console.log('ruedas', car['electric'] as boolean)
console.log(car['ruedas'] as number)

const car2: Car = new Car('toyota')
console.log(car2['electric'])

console.log('---------------- decoraddores de propiedad - -------------')


function Min(limit: number) {

    return function(target: Object, propertyKey: string) {
        console.log({target, propertyKey})

        let value: string

        const getValue = () =>{
            return value
        }

        const setValue = (newValue: string) => {
            console.log({limit, newValue})
            if (newValue.length < limit) {
             value = "errro"
            } else {
               
                console.log({newValue})
                value = newValue
            }
        } 

        Object.defineProperty(
            target,
            propertyKey,
            { 
                get: getValue,
                set: setValue
            }
        )
    }
}

class User {

    public username: string

    public error: string = ''

    @Min(8)
    public password: string 

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
        
    }
}

const ana = new User('ana', '1234')
console.log(ana.error)

const laura = new User('laura',  '123456789')
console.log(laura.error)


// Decoradores de métodos+

function Logger(target: Object, propertyKey: string, properties: PropertyDescriptor) {
    console.log({target, propertyKey, properties})
    console.log("---- estoy entrando en el método "+propertyKey)

}

class Test {
    @Logger
    suma(a: number, b: number) {
        return a +b
    }
}

function ParameterDecorator(
    target: Function, 
    propertyKey: string,
    parameterIndex: number
) {
    console.log({target, propertyKey, parameterIndex})
}



class ParameterTest {


    method(
        @ParameterDecorator param1: string, 
        param2: string
    ){

    }
}

const test = new ParameterTest() 
test.method("param1", 'param2')






