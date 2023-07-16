"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.fetchOrderById = exports.fetchOrderByRef = exports.fetchOrders = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_orders";
const fetchOrders = async (client, distributor_id) => {
    const query = `SELECT do.ref, do.status, do.amount, do.status, d.first_name, d.last_name, da.address, do.created_at FROM distributor_orders do
INNER JOIN distributor_addresses da ON da.id = do.distributor_id
${client === "admin" ? "INNER JOIN distributors d ON d.id = do.distributor_id" : ""}
${client === "distributor" ? "WHERE do.distributor_id = ?" : ""}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "distributor" ? [distributor_id] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchOrders = fetchOrders;
const fetchOrderByRef = async (client, ref, distributor_id) => {
    const query = `SELECT do.ref, do.status, do.created_at FROM distributor_orders do
INNER JOIN distributor_address da ON da.id = do.distributor_id
INNER JOIN package_categories pc ON pc.id = dop.package_id
WHERE do.ref = ?${client === "distributor" ? " AND do.distributor_id=?" : ""}
LIMIT 1`;
    const { response, error } = client === "admin" ? await (0, queryHelpers_1.execQuery)("distributor_orders", "SELECT", ['ref'], [ref]) : await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [distributor_id, ref]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchOrderByRef = fetchOrderByRef;
const fetchOrderById = async (client, id, distributor_id) => {
    const query = `SELECT do.id, do.ref, do.status, do.amount, d.email, d.first_name, d.last_name, da.address, da.phone_number, do.created_at FROM ${TABLE_NAME} do
INNER JOIN (distributor_addresses da, distributors d) ON (da.id = do.distributor_address_id AND d.id = do.distributor_id)
WHERE do.id = ?${client === "distributor" ? " AND do.distributor_id=?" : ""}
LIMIT 1`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "admin" ? [id] : [id, distributor_id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchOrderById = fetchOrderById;
const store = async (order, packages, distributor_id) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ["distributor_id", "distributor_address_id", "ref"], [order.distributor_id, order.distributor_address_id, order.ref]);
    const storeResults = (0, response_services_1.execResponse)(response, error);
    if (!storeResults || !storeResults.insertId)
        return null;
    const orderPackages = [];
    for (const orderPackage of packages) {
        orderPackages.push([distributor_id, storeResults.insertId, orderPackage[0], orderPackage[1]]);
    }
    const { response: dopvResponse, error: dopvError } = await (0, queryHelpers_1.execQuery)("distributor_order_product_variations", "BATCHINSERT", ["distributor_id", "distributor_order_id", "product_variation_id", "quantity"], [orderPackages]);
    const dopvResults = (0, response_services_1.execResponse)(dopvResponse, dopvError);
    return storeResults;
};
exports.store = store;
