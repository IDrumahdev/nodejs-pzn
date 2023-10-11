export class MyException extends Error {

}

export const callMe = (name) => {
    if(name === "Heri") {
        throw new MyException("Ups exception happends");
    } else {
        return "OKE";
    }
};