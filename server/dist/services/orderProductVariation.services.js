"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOrderProductVariationByOrderId = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "order_product_variations";
const fetchOrderProductVariationByOrderId = async (orderId) => {
    const query = `SELECT pv.variation, pv.buy_price, opv.quantity, p.name as product_name, pi.path_url as product_image ${TABLE_NAME}
INNER JOIN (products p, product_variations pv, product_images pi) ON (pv.id = opv.product_variation_id AND pv.product_id = p.id AND pi.product_id = p.id)
WHERE opv.order_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [orderId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchOrderProductVariationByOrderId = fetchOrderProductVariationByOrderId;
