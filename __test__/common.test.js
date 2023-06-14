const suma = require('../src/suma')

test('1+2 es 3', () => {
    expect(suma(1,2)).toBe(3)
})

test('Object Validation', () => {
    const data = { username: 'oscar_ortega' }
    const data2 = { username: 'Stark' }

    expect(data).toEqual({username: 'oscar_ortega'})
    expect(data2).not.toEqual({username: 'oscar_ortega'})
})