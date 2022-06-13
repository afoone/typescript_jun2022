class MiException {

    public mensaje: string
    public nombre: string = "Mi exception"
    constructor (mensaje: string) {
        this.mensaje = mensaje
    }
}

const lanzoException = () => {
  throw new MiException("hola")
}

test('should exception', () => { 

    expect(lanzoException).toThrow()
 })
