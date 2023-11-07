import Joi from 'joi';

describe('Joi Validation', () => {
    it('validation data', () => {
        const schema    = Joi.string().min(3).max(100).required();

        const request   = "ibudirsan";

        const result    = schema.validate(request)
        if(result.error) {
            console.info(JSON.stringify(result));
        } else {
            console.info("Success");
        }
    });

    it('type data basic', () => {
        const usernameSchema    = Joi.string().email().required();
        const isAdminSchema     = Joi.boolean().required();
        const priceSchema       = Joi.number().required().min(1000).max(1000000);

        const resultUsername    = usernameSchema.validate("ibnudirsan@gmail.com");
        console.info(resultUsername);

        const resultIsAdmin     = isAdminSchema.validate("true");
        console.info(resultIsAdmin);

        const resultPrice       = priceSchema.validate("100000");
        console.info(resultPrice);
    });
});