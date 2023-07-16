"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeProductVariation = exports.fetchProductVariationsbyIdArray = exports.fetchProductVariationByProductsArray = exports.fetchProductVariationsByProductRef = exports.fetchProductVariationsByProductId = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "product_variations";
const fetchProductVariationsByProductId = async ({ productId, client }) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, 
${client === 'user' ? 'pv.buy_price' :
        client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' :
            client === 'admin' ? 'pv.buy_price as buying_price, pv.sale_price as selling_price, pv.wholesale_min, pv.wholesale_price, pv.stock, pv.sold, pv.created_at' : ''} FROM ${TABLE_NAME} pv WHERE pv.product_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)("product_variations", query, null, [productId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductVariationsByProductId = fetchProductVariationsByProductId;
const fetchProductVariationsByProductRef = async (productRef, client) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv
INNER JOIN products p ON p.id = pv.product_id
WHERE p.ref = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)("product_variations", query, null, [productRef]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductVariationsByProductRef = fetchProductVariationsByProductRef;
const fetchProductVariationByProductsArray = async ({ productIds, client }) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`;
    const { response, error } = await (0, queryHelpers_1.execQuery)("product_variations", query, null, productIds);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductVariationByProductsArray = fetchProductVariationByProductsArray;
const fetchProductVariationsbyIdArray = async (client, productVariationIds) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.id IN (${',?'.repeat(productVariationIds.length).slice(1)})`;
    const { response, error } = await (0, queryHelpers_1.execQuery)("product_varaitions", query, null, productVariationIds);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductVariationsbyIdArray = fetchProductVariationsbyIdArray;
const storeProductVariation = async (client, product_variation) => {
    const query = `INSERT INTO ${TABLE_NAME} (${Object.keys(product_variation).join(",")}) VALUES (${',?'.repeat(Object.keys(product_variation).length).slice(1)})`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, Object.values(product_variation));
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeProductVariation = storeProductVariation;
