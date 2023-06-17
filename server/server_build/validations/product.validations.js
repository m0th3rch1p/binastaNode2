"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeSchema = exports.fetchBySlug = exports.fetchByIdSchema = exports.fetchSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.fetchSchema = joi_1.default.object({
    per_page: joi_1.default.number().min(1),
    offset: joi_1.default.number().min(0),
});
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
exports.fetchBySlug = joi_1.default.object({
    slug: joi_1.default.string().required()
});
exports.storeSchema = joi_1.default.object({
    category_id: joi_1.default.number().min(1).required(),
    product_name: joi_1.default.string().required(),
    product_description: joi_1.default.string().required()
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
    category_id: joi_1.default.number().min(1).required(),
    product_name: joi_1.default.string().required(),
    product_description: joi_1.default.string().required()
});
