"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = exports.fetchByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.storeSchema = joi_1.default.object({
    tenant_address_id: joi_1.default.number().required(),
    packages: joi_1.default.array().required()
});
