import Joi from 'joi';

export const fetchByIdSchema = Joi.object({
    id: Joi.number().min(1).required()
});

export const authSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});