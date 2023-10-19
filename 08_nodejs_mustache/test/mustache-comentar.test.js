import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mustache Comentar", async () => {
    const HelloTemplate = await fs.readFile("./templates/comentar.mustache")
                                    .then(data => data.toString());

    const data = Mustache.render(HelloTemplate, {
        title : "Judul"
    });

    console.log(data);
    expect(data).toContain("Judul");
    expect(data).not.toContain("ini adalah komentar");
});