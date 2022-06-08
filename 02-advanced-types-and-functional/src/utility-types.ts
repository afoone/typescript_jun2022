// ARchivo de configuración

// const conf = {
//     "url": "url_que_toque",
//     "otra cosa": "otra clsjdf"
//     key: value
// }

const serviceConfig: Record<string, string | number> = {
    "url": "url_que_toque",
    "otra cosa": "otra clsjdf",
    "port": 8080
}

// const enum ConfigElements {
//     url,
//     port, 
//     loquesea
// }


// const config: Record<ConfigElements, string|number> = {
//     url: "jdslj"
// }

interface MiTipo {
    a: string,
    b: string,
    c: string
}


// PArtials convierte todas las propiedades en opcionales
const formulario: Partial<MiTipo>  = {}

// Required 
// Lo contrario a partials
// todas las propiedades se convierten en obligatorias
interface MiTipo2 {
    a?: string,
    b?: string
}

const y: Required<MiTipo2> = {
    a: "",
    b: ""
}

// Recupera ciertas propiedades
const picked: Pick<MiTipo, "a"|"b">  = {
    a: "",
    b: ""
}


// Omite ciertas propiedades
const omitted: Omit<MiTipo, "a"> = {
    b: "",
    c: ""
}
