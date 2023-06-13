import Joi from "joi";

export const fetchByIdSchema = Joi.object({
    id: Joi.number().min(1).required()
});

export const storeSchema = Joi.object({
    product_id: Joi.number().min(1).required(),
    variation: Joi.string().required(),
    buy_price: Joi.number().min(1).required(),
    sale_price: Joi.number().min(1).required(),
    wholesale_price: Joi.number().min(1).required(),
    recommended_price: Joi.number().min(1),
    wholesale_minimum: Joi.number().min(1).required(),
    stock: Joi.number().min(1).required(),
});

export const updateSchema = Joi.object({
    id: Joi.number().min(1).required(), 
    product_id: Joi.number().min(1).required(),
    variation: Joi.string().required(),
    buy_Price: Joi.number().min(1).required(),
    sale_price: Joi.number().min(1).required(),
    wholesale_price: Joi.number().min(1).required(),
    recomended_price: Joi.number().min(1),
    wholesale_minimum: Joi.number().min(1).required(),
    stock: Joi.number().min(1).required(),
});