import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    tenant_address_id: Joi.number().required(),
    packages: Joi.array().required()
});