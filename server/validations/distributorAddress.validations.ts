import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    address: Joi.string().required(),
    phone_number: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    address: Joi.string().required(),
    phone_number: Joi.string().required()
});