import Joi from 'joi';

export const findByIdSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    downline: Joi.string().required(),
    type_value: Joi.number().required(),
    min_points: Joi.number().required(),
    point_value: Joi.number().required(),
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    downline: Joi.string().required(),
    type_value: Joi.number().required(),
    min_points: Joi.number().required(),
    point_value: Joi.number().required(),
});