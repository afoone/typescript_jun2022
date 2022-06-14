import { Cuadrado_, Rectangulo_ } from "./03-LSP"

test("rectangulo",
    () => {
        const r = new Rectangulo_(4, 4)
        expect(r.calculateArea()).toBe(16)
        r.setHeight(5)
        expect(r.calculateArea()).toBe(20)

        const c = new Cuadrado_(4)
        expect(r.calculateArea()).toBe(16)
        r.setHeight(5)
        expect(r.calculateArea()).toBe(20)// FALLARÍA (ME DARÍA 25) ---> SI NO SOY SUSTUIBLE NO PUEDO SER SU HIJO

    }
)