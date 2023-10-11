test("array", () => {
    const names = ["Heri", "Purwanto", "Ibnudirsan"];

    expect(names).toEqual(["Heri", "Purwanto", "Ibnudirsan"])
    expect(names).toContain("Purwanto");
});

test("array object", () => {
    const person = [
        {
            name : "Heri"
        },
        {
            name : "Purwanto"
        },
        {
            name : "Ibnudirsan"
        }
    ];

        expect(person).toContainEqual({
            name : "Ibnudirsan"
        });
});