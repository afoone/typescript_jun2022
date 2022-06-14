// PRINCIPIO DE RESPONSABILIDAD ÚNICA
// Cada componente tiene que tener una sóla responsabilidad
// Cada componente sólo tiene que tener una razón para cambiar. 

// class Empleado {
//     public nombre: string;
//     public nEmpleado: number;
//     public salary: number;

//     constructor(nombre: string, nEmpleado: number, salary: number) {
//         this.nombre = nombre
//         this.nEmpleado = nEmpleado
//         this.salary = salary
//     }

//     // ...

//     paySalary(): void {
//         // paga el salario
//     }

//     save(): void {

//     }
// }

// Firmar un contrato debería ser la razón de cambio

// Cambiar el banco desde donde pago NO---

class Empleado {
    public nombre: string;
    public nEmpleado: number;
    public salary: number;

    constructor(nombre: string, nEmpleado: number, salary: number) {
        this.nombre = nombre
        this.nEmpleado = nEmpleado
        this.salary = salary
    }
}

class Persistencia {
    public save(empleado: Empleado):void {

    }
}

class Pago {
    public pay(empleado: Empleado): boolean {
        return true
    }
}