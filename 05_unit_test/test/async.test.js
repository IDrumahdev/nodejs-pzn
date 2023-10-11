import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
    const result = await sayHelloAsync("Heri");
    expect(result).toBe("Hello Heri");
});

test("test async matchers", async () => {
   await expect(sayHelloAsync("Heri")).resolves.toBe("Hello Heri");
   await expect(sayHelloAsync()).rejects.toBe("Name is Empty");
});
