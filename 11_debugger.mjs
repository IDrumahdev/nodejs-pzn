function sayHello(name) {
    debugger;
    return `Hello ${name}`;
}

const name = "Heri";
console.info(sayHello(name));

// node inspect debugger.mjs
// watch("name")
// .exit