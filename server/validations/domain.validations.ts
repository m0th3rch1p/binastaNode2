import Joi from "joi";

export const storeSchema = Joi.object({
    distributorId: Joi.number().required(),
    name: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    distributorId: Joi.number().required(),
    name: Joi.string().required()
});

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required(),
});