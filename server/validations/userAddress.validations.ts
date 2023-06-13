import Joi from "joi";

export const findByIdSchema = Joi.object({
    id: Joi.number().min(1).required()
});

export const storeSchema = Joi.object({
    address: Joi.string().required(),
    phone_number: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().min(1).required(), 
    address: Joi.string().required(),
    phone_number: Joi.string().required()
});