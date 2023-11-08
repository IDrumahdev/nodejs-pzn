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

    it('Netsed Object Validation', () => {
        const createUserSchema = Joi.object({
            id: Joi.string().required().max(100),
            name: Joi.string().required().max(100),
            address: Joi.object({
                street: Joi.string().required().max(200),
                city: Joi.string().required().max(100),
                country: Joi.string().required().max(100),
                zipCode: Joi.string().required().max(10)
            }).required()
        });

        const request = {
            address: {

            }
        };

        const result = createUserSchema.validate(request, {
            abortEarly: false
        });

        console.info(result);

        if(result.error) {
            result.error.details.forEach(detail => {
                console.info(`${detail.path} = ${detail.message}`);
            });
        }

    });
});