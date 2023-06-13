import Joi from "joi";

export const idSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
    blogCategoryId: Joi.number().min(1).required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    post: Joi.string().required(),
    type: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    post: Joi.string().required(),
    type: Joi.string().required()
});