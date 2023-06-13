import Joi from "joi";

export const storeSchema = Joi.object({
    distributorUserId: Joi.number().min(1).required(),
    distributorUserAddressId: Joi.string().required(),
    packages: Joi.array().required()
});

export const idSchema = Joi.object({
    id: Joi.number().min(1).required(),
});