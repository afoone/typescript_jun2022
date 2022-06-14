import { Turno } from '../model/client'

export const callNext = (servicio: string, waitingQueue: Turno[]): Turno | null => {
  const turno: Turno =  waitingQueue.filter(
    t => t.servicio === servicio
  ).reduce<Turno|null>(
    (acc, current) => {
        return acc && (acc.id < current.id) ? acc: current
    }, 
    null
  )

  return turno
}



