export const sayHelloAsync = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name) {
                resolve(`Hello ${name}`);
            } else {
                reject("Name is Empty");
            }
        }, 1000);
    });
};

export const getBalance = async (name, form) => {
    const balance = await form();
    return {
        name : name,
        balance : balance
    }
};