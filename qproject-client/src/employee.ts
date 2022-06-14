import axios from "axios"
import { argv } from "process"
import { recibirTurno } from "./lib/recibirTurno"
import { Turno } from "./model/client"

const app = require('commander')

app
    .version('0.0.1')
    .description('empleado de colas')
    .option('-s --service <service>', 'Servicio sobre el cual queremos llamar a un cliente')
    .action(
        (options: {service: string}) => {
            console.log('action triggered')
            axios.get<Turno[]>('http://localhost:4000/turnos').then(
                res => recibirTurno(options.service, res.data) 
            )
        }
    )

app.parse(process.argv)