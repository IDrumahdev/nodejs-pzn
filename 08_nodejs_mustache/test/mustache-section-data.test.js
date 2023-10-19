import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Sections Data", async () => {
    const HelloTemplate = await fs.readFile("./templates/person.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {
        person : {
            name : "ibnudirsan"
        }
    });

    console.log(data);
    expect(data).toContain("Hello Person ibnudirsan");
});