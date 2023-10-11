import {sum} from '../src/sum.js';

beforeAll( async () => {
    console.info("Before All");
});

afterAll( async () => {
    console.info("After All");
});

beforeEach(() => {
    console.info("Before Each");
})

afterEach(() => {
    console.info("After Each");
});

test("first test", () => {
    expect(sum(10,30)).toBe(40);
    console.info("First Test");
});

test("second test", () => {
    expect(sum(20, 30)).toBe(50);
    console.info("Secand Test");
});