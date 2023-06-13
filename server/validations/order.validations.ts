import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().min(1).required()
});

export const storeSchema = Joi.object({
    user_address_id: Joi.number().min(1).required(),
    product_variations: Joi.array().min(1).required() 
});

export const updateSchema = Joi.object({
    id: Joi.number().min(1).required(),
    user_address_id: Joi.number().min(1).required(),
    product_variations: Joi.array().min(1).required()
});