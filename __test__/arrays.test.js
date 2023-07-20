const {carsList} = require('../src/arrays')

describe('Verifying the autos', () => {

    test('Not Null Array', () => {

        expect(carsList()).not.toBeNull()
    })

    test('Verify Honda City', () => {
        expect(carsList()).toContain('City')
    })

    test('Array Lenght', () => {
        expect(carsList()).toHaveLength(4)
    })
})