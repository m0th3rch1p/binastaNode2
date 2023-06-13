import Joi from "joi";

export const idSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    name: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});