import Mustache from 'mustache';

test("Menggunkan Mustache Function", async () => {

    const parameter = {
        name: "ibnudirsan",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{ #upper }}{{ name }}{{ /upper }}", parameter);
    expect(data).toBe("Hello IBNUDIRSAN");
});