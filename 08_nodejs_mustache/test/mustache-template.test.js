import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Template", async () => {
    const HelloTemplate = await fs.readFile("./templates/hello.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {
        title : "Rumahdev"
    });

    console.log(data);
    expect(data).toContain("Rumahdev");
});