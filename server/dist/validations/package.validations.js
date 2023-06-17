"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeVariationSchema = exports.storeSchema = exports.idSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.idSchema = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.storeSchema = joi_1.default.object({
    package_name: joi_1.default.string().required(),
    package_category_id: joi_1.default.number().required(),
    description: joi_1.default.string().required(),
});
exports.storeVariationSchema = joi_1.default.object({
    package_id: joi_1.default.number().required(),
    product_variations: joi_1.default.array().required()
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    package_category_id: joi_1.default.number().required(),
    package_name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
});
