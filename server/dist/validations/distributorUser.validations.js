"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.authenticateSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    distributorId: joi_1.default.number().min(1).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
exports.authenticateSchema = joi_1.default.object({
    distributorId: 'required | number',
    email: 'required | string | email',
    password: 'required | string'
});
exports.idSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
