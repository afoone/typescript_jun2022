import { Turno } from '../model/client'
import { callNext } from './callNext'

const queueMock: Turno[] = [
  {
    id: 4,
    servicio: 'informacion',
  },
  {
    id: 5,
    servicio: 'informacion',
  },
  {
    id: 7,
    servicio: 'informacion',
  },
  {
    id: 9,
    servicio: 'informacion',
  },
  {
    id: 5,
    servicio: 'resonancias',
  },
  {
    id: 7,
    servicio: 'resonancias',
  },
  {
    id: 9,
    servicio: 'resonancias',
  },
]

test('should return the next turn in the queue for the service', () => {
  expect(callNext('informacion', queueMock)).toEqual({
    id: 4,
    servicio: 'informacion',
  })
  expect(callNext('resonancias', queueMock)).toEqual({
    id: 5,
    servicio: 'resonancias',
  })

})

test('si no hay siguiente turno, devuelve null', () => {
  expect(callNext('no_existe', queueMock)).toBeNull()
  expect(callNext('informacion', [])).toBeNull()
})
