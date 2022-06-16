import { Turno } from "../../model/client"

/**
 * Servicio para realizar las llamadas al backend y obtener a quién debo llamar
 * @method get Recupera las llamadas
 */
export const llamadasService = {
    get: async () => {
        const res = await fetch('http://localhost:4000/llamados').catch(console.error)
        if (res) {
            const turnos: Turno[] = await res.json() as Turno[]
            return turnos
        } else {
            return []
        }
    }
} 