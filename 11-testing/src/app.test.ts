import { suma } from './app'

test('uno mas uno son dos', () => {
  // código que necesitemos
  expect(1 + 1).toBe(2)
})

test('dummy test', () => {
  expect(true).toBe(true)
  expect(true).toBeTruthy()
  expect('hola').toBeTruthy()
  expect(0).toBeFalsy()
  expect(4).toBeGreaterThan(2)
  expect(4 > 2).toBeTruthy()

  expect(null).toBeNull()
  expect(undefined).not.toBeNull()
  expect(null).toBeDefined()
  expect(null).not.toBeUndefined()

  expect(5).toBe(5)
  expect(5).toEqual(5)
})

describe('function suma', () => {
  test('suma correctamente', () => {
    expect(suma(2, 4)).toBe(6)
    expect(suma(3, 3)).toBe(6)
  })

  test('si suma dos elementos de distinto signo pero igual modulo, da cero', () => {
    expect(suma(-3, 3)).toBe(0)
    expect(suma(-5, 5)).toBe(0)
  })

  test('si pongo un sólo operando me devuelve el valor del operando',
   () => {
    expect(suma(4)).toBe(4)
    expect(suma(5)).toBe(5)
   }
  )

  test('si no paso argumentos, me devuelve undefined', 
    () => {
        expect(suma()).toBeUndefined()
    }
  )
})
