function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test('tag function', () => {
    const name = "ibnudirsan";
    const lastname = "purwanto"

    tagFunction`Hello ${name} ${lastname}, How Are You`;
    tagFunction`Bye ${name} ${lastname}!, see you later`;
});

test('tag function sql', () => {
    const name = "ibnudirsan'; DROP TABEL users;";
    const age = 32;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});