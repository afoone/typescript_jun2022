import { Turno } from "../model/client"


const turnos = [
    {
        "servicio": "hola",
        "id": 6
      },
      {
        "servicio": "hola",
        "id": 7
      },
      {
        "servicio": "informacion",
        "id": 9
      },
      {
        "servicio": "informacion",
        "id": 10
      }
]

export const generateDashboard = (turnos: Turno[]): HTMLTableElement  =>{
    const table = document.createElement<"table">('table')
    table.classList.add('ui', 'celled', 'table')

    const tableHeader = document.createElement('thead')
    const headerRow = document.createElement('tr')
    const headerTurno = document.createElement('th')
    headerTurno.innerText = "Turno"
    const headerMesa = document.createElement('th')
    headerMesa.innerText = "Acuda a..."
    headerRow.appendChild(headerTurno)
    headerRow.appendChild(headerMesa)
    tableHeader.appendChild(headerRow)
    
    table.appendChild(tableHeader)
    

    const rows : HTMLTableRowElement[] = turnos.map(
        t => {
            const row = document.createElement<"tr">("tr")
            const cell = document.createElement('td')
            cell.textContent = 'turno ' + t.id
            row.appendChild(cell)
            const cellService = document.createElement('td')
            cellService.textContent = t.servicio.toLocaleUpperCase()
            row.appendChild(cellService)
            return row
        }
    )

    const tableBody = document.createElement('tbody')
    rows.forEach(
        r=> tableBody.appendChild(r)
    )
    table.appendChild(tableBody)



    return table
}


console.log('iniciando')
const dashboardContainer = document.querySelector('#dashboard')
dashboardContainer.appendChild(generateDashboard(turnos))