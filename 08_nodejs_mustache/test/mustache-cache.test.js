import Mustache from 'mustache';

test("Menggunkan Mustache", () => {

    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{name}}", {
        name : "ibnudirsan"
    });

    expect(data).toBe("Hello ibnudirsan");
});