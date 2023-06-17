"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = exports.fetchByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
exports.authSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
