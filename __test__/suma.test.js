const suma = require('../src/suma')

describe('Pruebas para Suma', () => { //Crea un bloque para organizar grupos de pruebas

    test('1+2 es 3', () => {
        expect(suma(1,2)).toBe(3)
    })
    
    /*it('Debe regresar 3 con 1+2', () => { //it es un alias de Test
        expect(suma(1,2)).toBe(3)
    })*/

    test('1 + (-2) es -1', () => {
        expect(suma(1, -2)).toBe(-1)
    })

    test('(-1) + (-2) es -3', () => {
        expect(suma(-1, -2)).toBe(-3)
    })
}) 
