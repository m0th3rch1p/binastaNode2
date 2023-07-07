"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductsByProductIdArray = exports.fetchRelatedProductsByProductId = exports.fetchProductsByCategorySlug = exports.fetchProductsBySlug = exports.fetchProducts = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "products";
const fetchProducts = async (client, { perPage, offset, cat }) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, pc.name as category_name, pc.slug as category_slug, p.description${client === "admin" ? ', p.views, p.created_at' : ''} FROM products p
INNER JOIN (SELECT p.id FROM products p LIMIT ${perPage} OFFSET ${offset}) AS tmp USING (id)
INNER JOIN product_categories pc ON pc.id = p.category_id
    ${cat ? 'WHERE pc.slug = ?' : ''} ORDER BY id DESC`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, cat ? [cat] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProducts = fetchProducts;
const fetchProductsBySlug = async (slug) => {
    const query = `SELECT p.id, pc.name as category_name, p.category_id, p.name as name, p.slug as slug, p.description 
FROM products p
JOIN product_categories pc ON pc.id = p.category_id
WHERE p.slug = ? LIMIT 1`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [slug]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductsBySlug = fetchProductsBySlug;
const fetchProductsByCategorySlug = async ({ perPage, offset, slug }) => {
    const query = `SELECT pc.name as category_name, pc.slug as category_slug, p.id p.name, p.slug FROM products p 
INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [slug]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductsByCategorySlug = fetchProductsByCategorySlug;
const fetchRelatedProductsByProductId = async (categoryId) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [categoryId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchRelatedProductsByProductId = fetchRelatedProductsByProductId;
const fetchProductsByProductIdArray = async (client, idArray, { perPage, offset, cat }) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, pc.name as category_name, pc.slug as category_slug, p.description${client === "admin" ? ', p.views, p.created_at' : ''} FROM products p
    INNER JOIN (SELECT p.id FROM products p LIMIT ${perPage} OFFSET ${offset}) AS tmp USING (id)
    INNER JOIN product_categories pc ON pc.id = p.category_id
    ${cat ? 'WHERE pc.slug = ?' : ''} WHERE p.id IN (${',?'.repeat(idArray.length).slice(1)}) ORDER BY id DESC`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [idArray]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductsByProductIdArray = fetchProductsByProductIdArray;
