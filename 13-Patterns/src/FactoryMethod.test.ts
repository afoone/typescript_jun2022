import { Arco, ArcoFactory, Espada, EspadaFactory } from './FactoryMethod'

let af_: ArcoFactory
let ef_: EspadaFactory

describe('factories', () => {
  beforeEach(() => {
    af_ = new ArcoFactory()
    ef_ = new EspadaFactory()
  })

  test('should arcos', () => { 
    ()=>{
        expect(af_.create()).toBeInstanceOf(Arco)
    }
   })

   test('should espadas', () => { 
    ()=>{
        expect(ef_.create()).toBeInstanceOf(Espada)
    }
   })
})
