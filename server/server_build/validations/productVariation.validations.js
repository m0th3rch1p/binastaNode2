"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeSchema = exports.fetchByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
exports.storeSchema = joi_1.default.object({
    product_id: joi_1.default.number().min(1).required(),
    variation: joi_1.default.string().required(),
    buy_price: joi_1.default.number().min(1).required(),
    sale_price: joi_1.default.number().min(1).required(),
    wholesale_price: joi_1.default.number().min(1).required(),
    recommended_price: joi_1.default.number().min(1),
    wholesale_minimum: joi_1.default.number().min(1).required(),
    stock: joi_1.default.number().min(1).required(),
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
    product_id: joi_1.default.number().min(1).required(),
    variation: joi_1.default.string().required(),
    buy_Price: joi_1.default.number().min(1).required(),
    sale_price: joi_1.default.number().min(1).required(),
    wholesale_price: joi_1.default.number().min(1).required(),
    recomended_price: joi_1.default.number().min(1),
    wholesale_minimum: joi_1.default.number().min(1).required(),
    stock: joi_1.default.number().min(1).required(),
});
