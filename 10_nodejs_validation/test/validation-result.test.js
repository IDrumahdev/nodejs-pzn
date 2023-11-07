import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('validation result', () => {
        const birthDateSchema   = Joi.date().required().max("now").min("1-1-1988");

        const result    = birthDateSchema.validate("1-1-1987");
        console.info(result);
        console.info(result.value);
        console.info(result.error.details[0].message);

        const result2   = birthDateSchema.validate("1-1-1991");
        console.info(result2);
        console.info(result2.value);
        console.info(result2.error);
    });
});