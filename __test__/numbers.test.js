test('2+2', () => {
    const value = 2+2
    const floatValue = 0.1 + 0.2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
    expect(floatValue).toBeCloseTo(0.3)
})

