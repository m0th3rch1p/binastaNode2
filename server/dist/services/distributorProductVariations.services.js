"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDistributorProductVariationsByProductById = exports.fetchDistributorProductVariations = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_product_variations";
const fetchDistributorProductVariations = async (client, distributorId) => {
    const query = `SELECT pv.variation, pv.id, pv.product_id, p.name as product_name, p.slug as product_slug, pi.path_url as product_image, dpv.product_variation_id, dpv.selling_price ${client === "user" ? 'as buy_price' : ''} ${(client === "admin" || client === "distributor") ? ', dpv.sold, dpv.stock, pv.recomended_price, pv.wholesale_price as buying_price' : ''}
FROM distributor_product_variations dpv
JOIN (product_variations pv, products p, product_images pi) ON (pv.id = dpv.product_variation_id AND p.id = pv.product_id AND pi.product_id = p.id)
WHERE dpv.distributor_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [distributorId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorProductVariations = fetchDistributorProductVariations;
const fetchDistributorProductVariationsByProductById = async (client, distributorId, productId) => {
    const query = `SELECT p.id, pv.variation ${(client === "admin" || client === "distributor") ? ', dpv.sold, dpv.stock, pv.recomended_price, pv.wholesale_price as buying_price, dpv.selling_price' : ''} FROM distributor_product_variations dpv
JOIN (product_variations pv, products p) ON (pv.id = dpv.product_variation_id AND pv.product_id = p.id)
WHERE p.id = ? AND dpv.distributor_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [productId, distributorId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorProductVariationsByProductById = fetchDistributorProductVariationsByProductById;
