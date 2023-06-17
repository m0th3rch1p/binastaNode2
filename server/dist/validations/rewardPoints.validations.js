"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeSchema = exports.findByIdSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.findByIdSchema = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.storeSchema = joi_1.default.object({
    downline: joi_1.default.string().required(),
    type_value: joi_1.default.number().required(),
    min_points: joi_1.default.number().required(),
    point_value: joi_1.default.number().required(),
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    downline: joi_1.default.string().required(),
    type_value: joi_1.default.number().required(),
    min_points: joi_1.default.number().required(),
    point_value: joi_1.default.number().required(),
});
