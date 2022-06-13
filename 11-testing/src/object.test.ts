test(
    "comparación de objetos", 
    () => {
        const obj = {uno: 1}
        expect(obj).toEqual({uno:1})
        const obj2 = {} as any
        obj2.uno = 1
        expect(obj2).toEqual(obj)
    }
)