import Joi from "joi";

export const storeSchema = Joi.object({
    distributorId: Joi.number().min(1).required(),
    address: Joi.string().required(),
    phoneNumber: Joi.string().required(),
});

export const updateSchema = Joi.object({
    id: Joi.number().min(1).required(),
    distributorId: Joi.number().min(1).required(),
    address: Joi.string().required(),
    phoneNumber: Joi.string().required(),
});

export const fetchByIdSchema = Joi.object({
    id: Joi.number().min(1).required(),
});