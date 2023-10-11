import { MyException, callMe } from '../src/exception.js';

test("exception", () => {
    expect(() => callMe("Heri")).toThrow();
    expect(() => callMe("Heri")).toThrow(MyException);
    expect(() => callMe("Heri")).toThrow("Ups exception happends");
});