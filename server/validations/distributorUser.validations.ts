import Joi from 'joi';

export const registerSchema = Joi.object({
    distributorId: Joi.number().min(1).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const authenticateSchema = Joi.object({
    distributorId: 'required | number',
    email: 'required | string | email',
    password: 'required | string'
});

export const idSchema = Joi.object({
    id: Joi.number().min(1).required(),
})