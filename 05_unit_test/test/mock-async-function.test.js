import {getBalance} from '../src/async.js';

test("mock async function", async () => {
    const form = jest.fn();
    form.mockResolvedValueOnce(1000);

    await expect(getBalance("Heri", form)).resolves.toEqual({
        name: "Heri",
        balance: 1000
    });

    expect(form.mock.calls.length).toBe(1);
    await expect(form.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();

    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Heri", from);
});

test("mock async function error matcher", async () => {
    const from = jest.fn();

    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Heri", from)).rejects.toBe("Rejected");
});