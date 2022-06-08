type Persona = {
    nombre: string
    apellido?: string
    estadoCivil: "casado"|"soltero"
    padre?: Persona
    madre?:  Persona
  }
  
  const alfonso: Persona = {
    nombre: "alfonso",
    estadoCivil: "soltero",
    padre: {
      nombre: "alfonso",
      apellido: "tienda",
      estadoCivil: "soltero"
    }
  }
  