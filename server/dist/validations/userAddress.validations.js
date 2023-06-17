"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeSchema = exports.findByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.findByIdSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
exports.storeSchema = joi_1.default.object({
    address: joi_1.default.string().required(),
    phone_number: joi_1.default.string().required()
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
    address: joi_1.default.string().required(),
    phone_number: joi_1.default.string().required()
});
