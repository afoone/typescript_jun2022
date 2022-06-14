// Componentes han de estar abiertos para su extensión pero cerrados para su modificación

// class Rectangulo {
//   public width: number
//   public height: number
//   constructor(w: number, h: number) {
//     this.width = w
//     this.height = h
//   }
// }

// class Circulo {
//   public radius: number
//   constructor(r: number) {
//     this.radius = r
//   }
// }

// // Añado un triangulo -> necesito modificar la clase
// class CalculadoraAreas {
//   public calculateRectangleArea(rectangle: Rectangulo) {
//     return rectangle.height * rectangle.width
//   }

//   public calculateCircleArea(circle: Circulo) {
//     Math.PI * (circle.radius * circle.radius)
//   }
// }

interface DosDimensiones {
  calculateArea: () => number
}

class Rectangulo implements DosDimensiones {
  public width: number
  public height: number
  constructor(w: number, h: number) {
    this.width = w
    this.height = h
  }
  calculateArea = () => {
    return this.width * this.height
  }
}

class Circulo implements DosDimensiones {
  public radius: number
  constructor(r: number) {
    this.radius = r
  }
  calculateArea = () => Math.PI * (this.radius * this.radius)
}

// Añado un triangulo -> no necesito modificar la clase
class CalculadoraAreas {
  public calculateArea(objeto: DosDimensiones) {
    return objeto.calculateArea()
  }


}


