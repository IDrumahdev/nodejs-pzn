import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache List", async () => {
    const HelloTemplate = await fs.readFile("./templates/hobbies.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {
        hobbies : ["Coding", "Reading", "Traveling"]
    });

    console.log(data);
    expect(data).toContain("Coding");
});