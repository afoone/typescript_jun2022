import axios from "axios"
const app = require('commander')


// Crear un tipo para el turno
// id, servicio, numero

type Turno = {
    servicio: string
    id: number
}

// necesitaremos una acción que cree el turno , 
// nos tendrá que indicar el servicio que quiere


app.version('0.0.1').description('API de cliente de colas')
.option(
    "-s --servicio <servicio>", "Servicio al que se quiere acceder",
).action(
        (options: {servicio: string}) => {
            const turno: Partial<Turno> = {
                servicio: options.servicio
            }
            axios.post<Turno>('http://localhost:4000/turnos', turno).then(
                res => {
                    const turno_devuelto: Turno = res.data
                    console.log(`Su turno es ${turno_devuelto.id}`)
                }
            )
        }
)

app.parse(process.argv)
