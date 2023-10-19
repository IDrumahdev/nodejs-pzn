import Mustache from 'mustache';

test("Menggunkan Mustache Nested Object", () => {
    const data = Mustache.render("Hello {{person.name}}", {
        person : {
            name : "ibnudirsan"
        }
    });

    expect(data).toBe("Hello ibnudirsan");
});