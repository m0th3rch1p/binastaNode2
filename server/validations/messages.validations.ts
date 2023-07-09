import Joi from 'joi';

export const storeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    phone_number: Joi.string(),
    message: Joi.string()
});

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required()
});