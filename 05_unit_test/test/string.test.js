test("string", () => {
    const name = "Heri Purwanto";

    expect(name).toBe("Heri Purwanto");
    expect(name).toMatch(/Pur/);
});