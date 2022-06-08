type PersonaGen = {
    nombre: string
    apellido: string
  }
  
  const arr : PersonaGen[] = [
    {
      nombre: "alfonso",
      apellido: "perez" 
    },
    {
      nombre: "luisa",
      apellido: "otxoa"
    }
  ]
  
  
  // Generics 
  function firstElement<T>(value: Array<T>):T{
    return value[0]
  }
  
  function fullName<T>(value: T, properties: string[]): string {
    // value.nombre + " " + value.apellido
    return properties.map(
      p => 
      value[p] as string
    ).join(" ")
  
  }

  fullName<PersonaGen>(arr[0], ["nombre", "apellido"])
