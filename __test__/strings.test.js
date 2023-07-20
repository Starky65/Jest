describe('Email Validation', () => {

    test('This is an email', () => {
        const email = 'stk_987@outlook.com'

        expect(email).toMatch(/\S+@\S+\.\S+/)
    })

    
    test('This is not an email', () => {
        const email = 'stk_987outlook.com'

        expect(email).not.toMatch(/\S+@\S+\.\S+/)
    })


})

