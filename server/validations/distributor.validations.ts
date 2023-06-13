import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required()
})

export const registerSchema = Joi.object({
    country_id: Joi.number().min(1).required(),
    store_name: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().max(32).required(),
    phone_number: Joi.string().required(),
    gender: Joi.string().required(),
    referal_code: Joi.string()
});

export const authenticateSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(32).required(),
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    country_id: Joi.number().min(1).required(),
    store_name: Joi.string().required(),
    full_name: Joi.string().required(),
    gender: Joi.string().required(),
});