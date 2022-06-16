import { Turno } from "../model/client"

export const generateTableHeader = (): HTMLTableSectionElement => {
    const tableHeader = document.createElement('thead')
    const headerRow = document.createElement('tr')
    const headerTurno = document.createElement('th')
    headerTurno.innerText = "Turno"
    const headerMesa = document.createElement('th')
    headerMesa.innerText = "Acuda a..."
    headerRow.appendChild(headerTurno)
    headerRow.appendChild(headerMesa)
    tableHeader.appendChild(headerRow)
    return tableHeader
}


const generateRow = (turno:Turno): HTMLTableRowElement => {
    const row = document.createElement<"tr">("tr")
    const cell = document.createElement('td')
    cell.textContent = 'turno ' + turno.id
    row.appendChild(cell)
    const cellService = document.createElement('td')
    cellService.textContent = turno.servicio.toLocaleUpperCase()
    row.appendChild(cellService)
    return row
}

export const generateTableBody = (turnos: Turno[]): HTMLTableSectionElement => {
    const rows : HTMLTableRowElement[] = turnos.map(
        t => {
          return generateRow(t)
        }
    )

    const tableBody = document.createElement('tbody')
    rows.forEach(
        r=> tableBody.appendChild(r)
    )
    return tableBody
}