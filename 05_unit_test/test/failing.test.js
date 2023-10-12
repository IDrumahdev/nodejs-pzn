import {sayHello} from '../src/sayHello.js';

test("sayHello Success", () => {
    expect(sayHello("Heri")).toBe("Hello Heri");
});

test.failing("sayHello Error", () => {
    sayHello(null);
});

test("sayHello Error Matchers", () => {
    expect(() => sayHello(null)).toThrow();
});