"use strict";
exports.__esModule = true;
exports.updateSchema = exports.storeSchema = exports.fetchBySlug = exports.fetchByIdSchema = void 0;
var joi_1 = require("joi");
exports.fetchByIdSchema = joi_1["default"].object({
    id: joi_1["default"].number().required()
});
exports.fetchBySlug = joi_1["default"].object({
    slug: joi_1["default"].string().required()
});
exports.storeSchema = joi_1["default"].object({
    name: joi_1["default"].string().required()
});
exports.updateSchema = joi_1["default"].object({
    id: joi_1["default"].number().required(),
    name: joi_1["default"].string().required()
});
