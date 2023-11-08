import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('validation object', () => {
        const loginShcema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100) 
        });

        const request = {
            username: "ibnudirsan@gmail.com",
            password: "password"
        }

        const result = loginShcema.validate(request, {
            abortEarly: false
        });

        console.info(result);
        
    });
});