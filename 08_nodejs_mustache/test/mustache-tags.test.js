import Mustache from 'mustache';

test("Menggunkan Mustache Tags", () => {
    const data = Mustache.render("Hello {{name}}, my hobby is {{{ hobby }}}", {
        name : "ibnudirsan",
        hobby: "<b>Web Programming</b>"
    });

    expect(data).toBe("Hello ibnudirsan, my hobby is <b>Web Programming</b>");
});