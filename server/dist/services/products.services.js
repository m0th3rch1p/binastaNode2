"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductsBySlug = exports.fetchProducts = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const TABLE_NAME = "products";
const fetchProducts = async ({ perPage, offset, cat }) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, pc.name as category_name, pc.slug as category_slug, p.description FROM products p
    INNER JOIN (SELECT p.id FROM products p LIMIT ${perPage} OFFSET ${offset}) AS tmp USING (id)
    INNER JOIN product_categories pc ON pc.id = p.category_id
    ${cat ? 'WHERE pc.slug = ?' : ''} ORDER BY id DESC`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, cat ? [cat] : null);
    if (error) {
        console.error("[-] error fetching products");
        return null;
    }
    return response?.[0];
};
exports.fetchProducts = fetchProducts;
const fetchProductsBySlug = async (slug) => {
    const query = `SELECT p.id, p.category_id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.slug = ? LIMIT 1`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [slug]);
    if (error) {
        console.error("[-] error fetching products by slug");
        return null;
    }
    return response?.[0];
};
exports.fetchProductsBySlug = fetchProductsBySlug;
