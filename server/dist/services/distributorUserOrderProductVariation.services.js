"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDistributorYOrderProductVariations = exports.fetchDistributorUserOrderProductVariations = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_user_order_product_variations";
const fetchDistributorUserOrderProductVariations = async (order_id) => {
    const query = `SELECT pv.variation, p.name as product_name, pv.product_id, pv.id as variation_id, dopv.quantity, dpv.selling_price as buy_price FROM ${TABLE_NAME} dopv 
JOIN product_variations pv on pv.id = dopv.distributor_product_variation_id
JOIN distributor_product_variations dpv ON dpv.product_variation_id = dopv.distributor_product_variation_id
JOIN products p ON p.id = pv.product_id
WHERE dopv.distributor_user_order_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [order_id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorUserOrderProductVariations = fetchDistributorUserOrderProductVariations;
const storeDistributorYOrderProductVariations = async (orderProductVariations) => {
    const query = `INSERT INTO ${TABLE_NAME} (distributor_user_order_id, distributor_product_variation_id, quantity) VALUES ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [orderProductVariations]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeDistributorYOrderProductVariations = storeDistributorYOrderProductVariations;
