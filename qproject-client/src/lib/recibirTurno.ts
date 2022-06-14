import axios from 'axios'
import inquirer = require('inquirer')
import { Turno } from '../model/client'
import { callNext } from './callNext'

const recibirTurno = (service: string, waitingQueue: Turno[]) => {
  inquirer
    .prompt([
      {
        name: 'turno',
        message: `
                ¿A quién quieres llamar?
                0 - Al siguiente
                Otros: introducir el número de turno
                `,
      },
    ])
    .then((answers: { turno: string }) => {
      console.log(answers)
      if (answers.turno === '0') {
        const nuevoTurno = callNext(service, waitingQueue)
        if (nuevoTurno) {
          axios
            .post<Turno>('http://localhost:4000/llamados', nuevoTurno)
            .then(() =>
              axios.delete(`http://localhost:4000/turnos/${nuevoTurno.id}`)
            )
        }
      }
    })
}

export { recibirTurno }
