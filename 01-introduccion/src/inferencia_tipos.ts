// let estado_civil: "soltero"|"casado" = "soltero"

// estado_civil = "casado"

// estado_civil ="enrollao"


type PersonaEC = {
    nombre: string
    apellido?: string
    estadoCivil: "casado"|"soltero"
  }
  
  let primo: PersonaEC = {
    nombre: "pepe",
    apellido: "martinez",
    estadoCivil: "casado"
  }
  
  primo = {
    nombre: "Jose",
    estadoCivil: "soltero"
  }