import Mustache from 'mustache';

test("Menggunkan Mustache", () => {
    const data = Mustache.render("Hello {{name}}", {
        name : "ibnudirsan"
    });

    expect(data).toBe("Hello ibnudirsan");
});