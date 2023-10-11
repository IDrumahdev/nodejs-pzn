test("test toBe", () => {
    const name  = "ibnudirsan";
    const hello = `Hello ${name}`;

    expect(hello).toBe(`Hello ibnudirsan`);
});

test("test toEqual", () => {
    let person = {id: "heri"};
    Object.assign(person, {name: "Heri"});

    expect(person).toEqual({id: "heri", name: "Heri"});
});
