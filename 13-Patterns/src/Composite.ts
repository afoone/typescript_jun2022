interface ElementoVisual {
  render(): void
}

class Boton implements ElementoVisual {
  render(): void {
    throw new Error('Method not implemented.')
  }
}

class Div implements ElementoVisual {
  render(): void {}
}

class Form implements ElementoVisual {
  public _children: Array<ElementoVisual>

  constructor() {
    this._children = []
  }

  public addElement(el: ElementoVisual) {
    this._children.push(el)
  }

  public removeElement(idx: number) {
    this._children.splice(idx, 1)
  }

  render(): void {}
}

class Input implements ElementoVisual {
  render(): void {}
}
