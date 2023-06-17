"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.storeSchema = exports.idSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.idSchema = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.storeSchema = joi_1.default.object({
    name: joi_1.default.string().required()
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
