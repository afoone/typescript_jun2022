import { generateDashboard } from './app'


const mockTurnos = [
  {
    servicio: 'hola',
    id: 6,
  },
  {
    servicio: 'hola',
    id: 7,
  },
  {
    servicio: 'informacion',
    id: 9,
  },
  {
    servicio: 'informacion',
    id: 10,
  },
]


describe('generateDashboard', () => {
  let dashboard: HTMLTableElement

  beforeEach(() => {

  })

  test('el dashboard tiene una tabla', () => {
    document.body.innerHTML = `
    <div>
      <div id="dashboard">
    </div>
    `

    console.log("bosy", document.body)
    //dashboard = generateDashboard(mockTurnos)

  })

  test('la tabla tiene un header', () => {})

  test('hay una fila por cada turno', () => {})

  test('hay dos columnas, la primera tiene el número de turno y la segunda tiene el servicio', () => {})
})
