import Joi from 'joi';

export const paymentSchema = Joi.object({
    order_ref: Joi.string().max(8).required(),
    payment_type: Joi.string().required(),
    phone_number: Joi.string()
});

export const processSchema = Joi.object({
    orderRef: Joi.string().required(),
    orderType: Joi.string().required(),
    gateway: Joi.string().required()
})