import {generateDashboard} from './app'
import {JSDOM} from 'jsdom'


const mockTurnos = [
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

const { document } = (new JSDOM(`<div class='dashboard'></div>`)).window;


describe('generateDashboard', () => { 

    let dashboard: HTMLTableElement;

    beforeEach(
        
        ()=> dashboard = generateDashboard(mockTurnos)
    ) 

    test('el dashboard tiene una tabla', () => { 


     })

     test(
        'la tabla tiene un header',
        () => {

        }
     )

     test (
        'hay una fila por cada turno',
        () => {

        }
     )

     test (
        'hay dos columnas, la primera tiene el número de turno y la segunda tiene el servicio',
        () => {

        }
     )

 })