// Principio de sustitución de Liskov (Barbara Liskov)
// HIJO -> PADRE En cualquier sitio que se use el padre, debería poder usar el hijo

class Rectangulo_ {
  private width: number
  private height: number

  public getWidth() {
    return this.width
  }

  public setWidth(w: number) {
    this.width = w
  }

  public getHeight() {
    return this.height
  }

  public setHeight(h: number) {
    this.height = h
  }
  constructor(w: number, h: number) {
    this.width = w
    this.height = h
  }
  calculateArea = () => {
    return this.width * this.height
  }

  // es una singularidad
  isCuadrado(){
    return this.width === this.height
  }
}

class Cuadrado_ extends Rectangulo_ {
  public setWidth(w: number) {
    super.setWidth(w)
    super.setHeight(w)
  }

  public setHeight(h: number) {
    this.setWidth(h)
    this.setHeight(h)
  }
  constructor(l: number) {
    super(l, l)
  }
}

export { Cuadrado_, Rectangulo_ }
