import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    country_name: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    country_name: Joi.string().required()
});