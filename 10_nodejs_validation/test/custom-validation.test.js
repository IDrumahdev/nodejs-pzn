import Joi from 'joi';

describe('Validation Nodejs', () => {
    it('custom validation', () => {
        const registerSchema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
                if(value.startsWith("ibnudirsan")) {
                    return helpers.error("password.wrong");
                }
                    return value;
            }).messages({
                'password.wrong' : 'Password can not start with ibnudirsan'
            }),
            confirmPassword: Joi.string().required().min(6).max(100)
        }).custom((value, helpers) => {
            if(value.password !== value.confirmPassword) {
                return helpers.error("register.password.different");
            }
                return value;
        }).messages({
            'register.password.different' : 'Password and Comfirm Password is different.'
        });

        const request = {
            username: "ibnudirsan@gmail.com",
            password: "ibnudirsan",
            confirmPassword: "pekanbaru"
        };

        const result = registerSchema.validate(request, {
            abortEarly: false
        });

        console.info(result);
    });
});