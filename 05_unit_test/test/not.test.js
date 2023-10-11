test("string.not", () => {
    const name = "Heri Purwanto";

    expect(name).not.toBe("Ibnudirsan");
    expect(name).not.toEqual("Ibnudirsan");
    expect(name).not.toMatch(/Ibnu/);
});

test("number.not", () => {
    const number = 2 + 2;

    expect(number).not.toBeGreaterThan(6);
    expect(number).not.toBeLessThan(3);
    expect(number).not.toBe(10);
});