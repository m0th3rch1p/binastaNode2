"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCategory = exports.fetchCategories = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "product_categories";
const fetchCategories = async (client) => {
    const query = `SELECT id, name, slug, image_path, ${client === "admin" ? 'created_at' : ''} FROM product_categories`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchCategories = fetchCategories;
const storeCategory = async (category) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['name', 'slug', 'image_path', 'ext'], [category.name, category.slug, category.image_path, category.ext]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeCategory = storeCategory;
