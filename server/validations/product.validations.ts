import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().min(1).required()
});

export const fetchBySlug = Joi.object({
    slug: Joi.string().required()
});

export const storeSchema = Joi.object({
    category_id: Joi.number().min(1).required(),
    product_name: Joi.string().required(),
    product_description: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().min(1).required(),
    category_id: Joi.number().min(1).required(),
    product_name: Joi.string().required(),
    product_description: Joi.string().required()
});