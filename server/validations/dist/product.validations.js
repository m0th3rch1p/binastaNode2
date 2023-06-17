"use strict";
exports.__esModule = true;
exports.updateSchema = exports.storeSchema = exports.fetchBySlug = exports.fetchByIdSchema = exports.fetchSchema = void 0;
var joi_1 = require("joi");
exports.fetchSchema = joi_1["default"].object({
    per_page: joi_1["default"].number().min(1),
    offset: joi_1["default"].number().min(0),
    cat: joi_1["default"].string()
});
exports.fetchByIdSchema = joi_1["default"].object({
    id: joi_1["default"].number().min(1).required()
});
exports.fetchBySlug = joi_1["default"].object({
    slug: joi_1["default"].string().required()
});
exports.storeSchema = joi_1["default"].object({
    category_id: joi_1["default"].number().min(1).required(),
    product_name: joi_1["default"].string().required(),
    product_description: joi_1["default"].string().required()
});
exports.updateSchema = joi_1["default"].object({
    id: joi_1["default"].number().min(1).required(),
    category_id: joi_1["default"].number().min(1).required(),
    product_name: joi_1["default"].string().required(),
    product_description: joi_1["default"].string().required()
});
