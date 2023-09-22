function samplePromise() {
    return Promise.resolve("Heri - mjs");
}

const name = await samplePromise();
console.info(name);