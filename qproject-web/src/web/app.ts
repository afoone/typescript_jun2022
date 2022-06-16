import { Turno } from "../model/client"
import { llamadasService } from "./service/llamadas.js"
import { generateTableBody, generateTableHeader } from "./tableGenerator.js"



/**
 * Crea y devuelve el dashboard
 * @param turnos: Turno[] : Array con los turnos a mostrar en pantalla
 * @returns HTMLTableElement: Tabla del dashboard
 */
export const generateDashboard = (turnos: Turno[]): HTMLElement  =>{
    const table = document.createElement<"table">('table')
    table.classList.add('ui', 'celled', 'table')

    table.appendChild(generateTableHeader())

    table.appendChild(generateTableBody(turnos))

    return table
}

export const init = async ()  =>  {
  console.log('iniciando')
  const dashboardContainer = document.querySelector('#dashboard')
  console.log('preparado para llamar')
  const turnos: Turno[] = await llamadasService.get()
  dashboardContainer.appendChild(generateDashboard(turnos))
}

init()


