import Joi from "joi";

export const idSchema = Joi.object({
    id: Joi.number().required()
});

export const storeSchema = Joi.object({
   package_name: Joi.string().required(),
   package_category_id: Joi.number().required(),
   description: Joi.string().required(),
});

export const storeVariationSchema = Joi.object({
    package_id: Joi.number().required(),
    product_variations: Joi.array().required()
});

export const updateSchema = Joi.object({
    id: Joi.number().required(),
    package_category_id: Joi.number().required(),
    package_name: Joi.string().required(),
    description: Joi.string().required(),
});