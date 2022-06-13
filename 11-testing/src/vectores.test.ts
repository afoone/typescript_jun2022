
const vector = [1,2,3,4,5,6]


test('should vectors', () => { 
    expect(vector).toContain(3)
    expect(vector).toHaveLength(6)
    expect(vector?.length).toBe(6)
 })