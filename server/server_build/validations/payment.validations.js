"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processSchema = exports.paymentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.paymentSchema = joi_1.default.object({
    order_ref: joi_1.default.string().max(8).required(),
    payment_type: joi_1.default.string().required(),
    phone_number: joi_1.default.string()
});
exports.processSchema = joi_1.default.object({
    orderRef: joi_1.default.string().required(),
    orderType: joi_1.default.string().required(),
    gateway: joi_1.default.string().required()
});
