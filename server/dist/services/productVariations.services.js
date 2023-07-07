"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductVariationsbyIdArray = exports.fetchProductVariationByProductsArray = exports.fetchProductVariationsByProductId = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const fetchProductVariationsByProductId = async ({ productId, client }) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)("product_variations", query, null, [productId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductVariationsByProductId = fetchProductVariationsByProductId;
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
