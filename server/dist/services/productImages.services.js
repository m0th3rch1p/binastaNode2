"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductImagesByProductId = exports.fetchProductImagesByProductIdArray = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "product_images";
const fetchProductImagesByProductIdArray = async (productIds) => {
    const query = `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, productIds);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductImagesByProductIdArray = fetchProductImagesByProductIdArray;
const fetchProductImagesByProductId = async (productId) => {
    const query = `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [productId]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchProductImagesByProductId = fetchProductImagesByProductId;
