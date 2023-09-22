function samplePromise() {
    return Promise.resolve("Heri js");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();