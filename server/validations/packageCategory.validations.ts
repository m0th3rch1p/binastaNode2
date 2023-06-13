import Joi from "joi";

export const idSchema = Joi.object({
    id: Joi.number().required()
});

export const fetchBySlug = Joi.object({
    slug: Joi.string().required()
});

export const storeSchema = Joi.object({
    category_name: Joi.string().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    category_name: Joi.string().required()
})