import { sumAll } from '../src/sum.js';

const table = [
    [
        [10,10,10],
        30
    ],
    [
        [10,10,10,10,10],
        50
    ],
    [
        [10,10,10,10,10,10,10],
        70
    ]
];

test.each(table)("test sumAll(%s) should result %i", (number, expected) => {
    expect(sumAll(number)).toBe(expected);
});