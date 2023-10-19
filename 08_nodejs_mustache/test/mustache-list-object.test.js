import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache List Object", async () => {
    const HelloTemplate = await fs.readFile("./templates/list-object.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {
        students : [
            {
                name: "Heri",
                value: 100
            },
            {
                name: "Purwanto",
                value: 100
            }
        ]
    });

    console.log(data);
    expect(data).toContain("Heri");
});