import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('validation option', () => {
        const usernameSchema = Joi.string().min(5).email().required();
        
        const result = usernameSchema.validate("Ups", {
            abortEarly: false
        });

        console.info(result.value);

        if(result.error) {
            result.error.details.forEach(detail => {
                console.info(`${detail.path} = ${detail.message}`);
            })
        }
    });
});