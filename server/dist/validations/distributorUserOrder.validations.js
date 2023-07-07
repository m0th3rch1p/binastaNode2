"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDeliveredSchema = exports.idSchema = exports.storeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.storeSchema = joi_1.default.object({
    distributorUserId: joi_1.default.number().min(1).required(),
    distributorUserAddressId: joi_1.default.string().required(),
    packages: joi_1.default.array().required()
});
exports.idSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
});
exports.markDeliveredSchema = joi_1.default.object({
    order_id: joi_1.default.number().min(1).required()
});
