// objecto

let a = 4

describe('describe', () => {

    test('test 1', () => { 
        a = a +1
        expect(a).toBe(5)
     })

     test('test 2', () => { 
        a = a*2
        expect(a).toBe(8)
     })


     test('test 3', () => { 
        expect(true).toBeTruthy()
     })


     test('test 4', () => { 
        expect(true).toBeTruthy()
     })


     test('test 5', () => { 
        expect(true).toBeTruthy()
     })

     beforeEach(
        ()=> {
            //console.log('before each')
            a = 4
        }
     )

     beforeAll (
        () => {
            //console.log('before all')
        }
     )

     //afterEach() - > cancelar algunas cosas - promesa
     // afterall -> cerrar conexios de db , cerrar sockets, websockets



  })