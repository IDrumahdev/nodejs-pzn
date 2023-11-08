import Joi from 'joi';

describe('Vlidation Nodejs', () => {
    it('custome message', () => {
        const schema = Joi.string().min(3).max(5).required().messages({
            'string.min' : '{{#label}} panjang harus minimal {{#limit}} karakter',
            'string.max' : '{{#label}} panjang harus maximal {{#limit}} karakter'
        });

        const request = "a";

        const result = schema.validate(request,{
            abortEarly: false
        });

        if(result.error) {
            console.info(result);
        }
    });

    it('Complex Custome Messages', () => {
        const loginShema = Joi.object({
            username: Joi.string().required().email().messages({
                'any.required': '{{#label}} Harus di isi',
                'string.email': '{{#label}} Harus email'
            }),

            password: Joi.string().required().min(6).max(100).messages({
                'any.required':'{{#label}} Harus diisi',
                'string.min': '{{#label}} Minimal {{#limit}} Karakter',
                'string.max': '{{#label}} Maximal {{#limit}} Karakter'
            })
        });

        const auth = {
            username:"ibnu",
            password:"ibnu"
        };

        const result = loginShema.validate(auth, {
            abortEarly: false
        });

        console.info(result);
    });
});