import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('Validation Error', () => {
        const usernameSchema = Joi.string().min(5).email().required();

        const result = usernameSchema.validate("Ups");
        console.info(result);

        if(result.error) {
            result.error.details.forEach(detail => {
                console.info(`${detail.path} = ${detail.message}`);
            });
        }
    });
});