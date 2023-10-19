import Mustache from 'mustache';

test("Menggunkan Mustache Cache", () => {

    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{name}}", {
        name : "ibnudirsan"
    });

    expect(data).toBe("Hello ibnudirsan");
});