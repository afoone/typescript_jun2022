let _tipoAny: any

_tipoAny = true
_tipoAny = 23
_tipoAny = 'ksdfj'
_tipoAny = []
_tipoAny = {}
_tipoAny = () => {}
_tipoAny = null
_tipoAny = undefined

_tipoAny.toUpperCase()
_tipoAny[0]
_tipoAny()

let _tipoDesconocido: unknown
_tipoDesconocido = true
_tipoDesconocido = 23
_tipoDesconocido = 'ksdfj'
_tipoDesconocido = []
_tipoDesconocido = {}
_tipoDesconocido = () => {}
_tipoDesconocido = null
_tipoDesconocido = undefined

// narrowing 

if (typeof _tipoDesconocido === 'string') {
  _tipoDesconocido.toUpperCase()
}
_tipoDesconocido[0]

typeof _tipoDesconocido === "function" && _tipoDesconocido()
