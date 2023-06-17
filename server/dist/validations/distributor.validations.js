"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.authenticateSchema = exports.registerSchema = exports.fetchByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.registerSchema = joi_1.default.object({
    country_id: joi_1.default.number().min(1).required(),
    store_name: joi_1.default.string().required(),
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().max(32).required(),
    phone_number: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
    referal_code: joi_1.default.string()
});
exports.authenticateSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().max(32).required(),
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    country_id: joi_1.default.number().min(1).required(),
    store_name: joi_1.default.string().required(),
    full_name: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
});
