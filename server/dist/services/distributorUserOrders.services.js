"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markDistriutorUserOrderDelivered = exports.storeDistributorUserOrder = exports.fetchDistributorUserOrderByRef = exports.fetchDistributorUserOrderById = exports.fetchDistributorUserOrders = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const distributorUserOrderProductVariation_services_1 = require("./distributorUserOrderProductVariation.services");
const productImages_services_1 = require("./productImages.services");
const lodash_1 = __importDefault(require("lodash"));
const TABLE_NAME = "distributor_user_orders";
const fetchDistributorUserOrders = async (client, user_id) => {
    const query = `SELECT duo.ref, duo.created_at,duo.status, duo.amount, duo.created_at 
FROM distributor_user_orders duo
${client === "distributor" ? `INNER JOIN distributor_users du ON du.id = duo.distributor_user_id WHERE du.distributor_id = ?` : ''}
${client === "user" ? " WHERE duo.distributor_user_id" : ""}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [user_id] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorUserOrders = fetchDistributorUserOrders;
const fetchDistributorUserOrderById = async (client, order_id, user_id) => {
    const query = `SELECT dua.address, dua.phone_number, duo.ref, duo.status, duo.created_at FROM distributor_user_orders duo 
JOIN distributor_user_addresses dua ON dua.id = duo.distributor_user_address_id
${client === "user" ? 'WHERE duo.id = ?' : ''}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" ? [user_id] : null);
    const results = (0, response_services_1.execResponse)(response, error);
    if (!results || !results.length)
        return null;
    const product_variations = await (0, distributorUserOrderProductVariation_services_1.fetchDistributorUserOrderProductVariations)(order_id);
    if (!product_variations)
        return null;
    return { order: results[0], product_variations };
};
exports.fetchDistributorUserOrderById = fetchDistributorUserOrderById;
const fetchDistributorUserOrderByRef = async (client, user_id, order_ref) => {
    const query = `SELECT du.email, duo.id, pv.variation, dua.address, duopv.quantity, dua.phone_number, duo.ref, duo.status, duo.amount, duo.created_at FROM distributor_user_orders duo 
${client === "distributor" ? "JOIN (distributor_user_addresses dua, distributor_users du, distributor_user_order_product_variations duopv, product_variations pv) ON (dua.id = duo.distributor_user_address_id AND du.id = duo.distributor_user_id AND duopv.distributor_user_order_id = duo.id AND duopv.distributor_product_variation_id = pv.id) WHERE du.distributor_id = ? AND " : ""}
${client === "user" ? "WHERE duo.distributor_user_id=? AND " : ""}
duo.ref = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [user_id, order_ref] : [order_ref]);
    const results = (0, response_services_1.execResponse)(response, error);
    if (!results || !results.length)
        return null;
    const product_variations = await (0, distributorUserOrderProductVariation_services_1.fetchDistributorUserOrderProductVariations)(results[0].id);
    if (!product_variations || !product_variations.length)
        return null;
    const productIds = product_variations.map(variation => variation.product_id);
    const productImages = await (0, productImages_services_1.fetchProductImagesByProductIdArray)(productIds);
    if (productImages && !productImages.length)
        return null;
    const groupedImages = lodash_1.default.groupBy(productImages, "product_id");
    const variationsImagesEmbedded = product_variations.map(variation => ({
        ...variation,
        images: groupedImages[variation.product_id]
    }));
    return { order: results[0], product_variations: variationsImagesEmbedded };
};
exports.fetchDistributorUserOrderByRef = fetchDistributorUserOrderByRef;
const storeDistributorUserOrder = async (order, productVariations) => {
    const query = `INSERT INTO distributor_user_orders (distributor_user_id, distributor_user_address_id, ref) VALUES (?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [order.distributor_user_id, order.distributor_user_address_id, order.ref]);
    const orderResults = (0, response_services_1.execResponse)(response, error);
    if (!orderResults || !orderResults.affectedRows)
        return null;
    const variations = productVariations.map(([product_variation_id, quantity]) => [orderResults.insertId, product_variation_id, quantity]);
    ;
    const distributorUserOrderResults = await (0, distributorUserOrderProductVariation_services_1.storeDistributorYOrderProductVariations)(variations);
    if (!distributorUserOrderResults)
        return null;
    return orderResults;
};
exports.storeDistributorUserOrder = storeDistributorUserOrder;
const markDistriutorUserOrderDelivered = async (order_id, distributor_id) => {
    const query = `UPDATE distributor_user_orders duo INNER JOIN distributor_users du ON du.id = duo.distributor_user_id SET status = 'delivered'
WHERE duo.id = ? AND du.distributor_id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [order_id, distributor_id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.markDistriutorUserOrderDelivered = markDistriutorUserOrderDelivered;
