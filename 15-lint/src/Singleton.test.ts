import { Singleton } from './Singleton'

test('should be an singleton', () => { 
    expect(Singleton.getInstance() === Singleton.getInstance())
})