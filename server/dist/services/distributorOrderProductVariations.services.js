"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDistributorOrderProductVariationsByOrderId = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_order_product_variations";
const fetchDistributorOrderProductVariationsByOrderId = async (id) => {
    const query = `SELECT quantity, pv.variation, pv.wholesale_min as buy_price, pv.wholesale_min, p.name as product_name, p.slug as product_slug, p.id as product_id FROM ${TABLE_NAME} dopv
INNER JOIN (distributor_orders do, product_variations pv, products p) 
ON (do.id = dopv.distributor_order_id AND pv.id = dopv.product_variation_id AND p.id = pv.product_id)
WHERE dopv.distributor_order_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorOrderProductVariationsByOrderId = fetchDistributorOrderProductVariationsByOrderId;
