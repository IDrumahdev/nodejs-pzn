export const sum = (first , secand) => {
    return first + secand;
}

export const sumAll = (numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
        return total;
}