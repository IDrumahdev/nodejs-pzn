import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('Array Validation', () => {
        const hobbisSchema = Joi.array().items(
            Joi.string().required().min(3).max(100)
        ).min(1).unique();

        const hobbis = ["A", "Reading", "Coding", "Coding"];

        const result = hobbisSchema.validate(hobbis, {
            abortEarly: false
        });

        console.info(result);
    });

    it('validate array of abject', () => {
        const addressSchema = Joi.array().min(1).items(Joi.object({
            street: Joi.string().required().max(200),
            city: Joi.string().required().max(100),
            country: Joi.string().required().max(100),
            zipCode: Joi.string().required().max(10)
        }));

        const address = [{
            street: "Jalan Padat Karya No. 99"
        }];

        const result = addressSchema.validate(address, {
            abortEarly: false
        });

        console.info(result);
    });
});