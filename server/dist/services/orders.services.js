"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOrderProductVariations = exports.store = exports.fetchById = exports.fetchAll = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "orders";
const fetchAll = async (client, userId) => {
    const query = `SELECT o.id, o.user_id, o.status, o.amount, o.created_at, u.email, ua.address FROM ${TABLE_NAME} o
INNER JOIN users u ON u.id = o.user_id
INNER JOIN user_addresses ua ON ua.id = o.user_address_id
${client === "user" ? `WHERE o.user_id = ?` : ""}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" ? [userId] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchAll = fetchAll;
const fetchById = async (client, id, userId) => {
    const query = `SELECT o.id, o.user_id, o.status, o.amount, o.created_at, u.email, u.address FROM ${TABLE_NAME} o
INNER JOIN (users u, user_addresses ua) ON (u.id = o.user_id AND ua.id = o.user_address_id)
WHERE id = ?${client === "user" ? " AND WHERE user_id = ?" : ""}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" ? [id, userId] : [id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchById = fetchById;
const store = async (order) => {
    const query = `INSERT INTO orders (user_id, user_address_id, ref, status, amount) VALUES (?, ?, ?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [order.user_id, order.user_address_id, order.ref, order.status]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.store = store;
const fetchOrderProductVariations = async (order_id) => {
    const query = `SELECT pv.variation, pv.buy_price, opv.quantity FROM orders o
INNER JOIN (order_product_variations opv, product_variations pv) ON (opv.order_id = o.id AND opv.product_variation_id = pv.id)
WHERE o.id = ?`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [order_id]);
};
exports.fetchOrderProductVariations = fetchOrderProductVariations;
