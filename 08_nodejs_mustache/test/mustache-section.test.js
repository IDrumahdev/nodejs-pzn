import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Sections Not Show", async () => {
    const HelloTemplate = await fs.readFile("./templates/section.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {

    });

    console.log(data);
    expect(data).not.toContain("Hello Person");
});