"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchByIdSchema = exports.updateSchema = exports.storeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.storeSchema = joi_1.default.object({
    distributorId: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    distributorId: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
exports.fetchByIdSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
});
