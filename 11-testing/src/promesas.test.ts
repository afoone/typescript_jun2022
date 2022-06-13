const buscaalgo = () => {
  return new Promise(resolve => resolve('hola'))
}

test('promesa', () => {
  buscaalgo().then(res => {
    expect(res).toBeDefined()
    expect(res).toBe('hola')
  })
})

test('promesa' ,

    async () => {
        const res = await buscaalgo()
        expect(res).toBeDefined()
        expect(res).toBe('hola')
    }
)
