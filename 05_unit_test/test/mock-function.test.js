import {calculate, caculateAndReturn} from '../src/sum.js';

test("test caculate", () => {
    const callback = jest.fn();

    calculate([10,10,10], callback);
    calculate([10,10,10,10,10], callback);

    expect(callback.mock.calls.length).toBe(2);

    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
});

test("test mock return value", () => {
    const callback = jest.fn();

    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(caculateAndReturn([10,10,10,10], callback)).toBe(40);
    expect(caculateAndReturn([10,10,10,10,10,10,10,10], callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(80);
});

test("test mock implementation", () => {
    const callback = jest.fn();

    callback.mockImplementation((total) => {
        return total * 2;
    })

    expect(caculateAndReturn([10,10,10], callback)).toBe(60);
    expect(caculateAndReturn([10,10,10,10,10], callback)).toBe(100);

    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(100);
});