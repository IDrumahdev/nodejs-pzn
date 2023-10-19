import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Partsial", async () => {
    const contentTemplate = await fs.readFile("./templates/content.mustache")
                                    .then(data => data.toString());

    const headerTemplate = await fs.readFile("./templates/header.mustache")
                                    .then(data => data.toString());

    const footerTemplate = await fs.readFile("./templates/footer.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(contentTemplate, {
        title: "RumahDev",
        content: "Belajar Nodejs"

    }, {
        header : headerTemplate,
        footer : footerTemplate
    });

    console.log(data);
    expect(data).toContain("RumahDev");
    expect(data).toContain("Belajar Nodejs");
    expect(data).toContain("Power By ibnudirsan");
});