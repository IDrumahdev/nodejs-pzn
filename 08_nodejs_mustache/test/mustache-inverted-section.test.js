import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Inverted Sections", async () => {
    const HelloTemplate = await fs.readFile("./templates/inverted-section.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {

    });

    console.log(data);
    expect(data).toContain("Hello Bro");
});