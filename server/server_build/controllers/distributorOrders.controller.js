"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorOrderByRef = exports.fetchDistributorOrders = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
const StrHelper_1 = require("@/helpers/StrHelper");
const index = async (req, res) => {
    const { response: distributororders, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributororders" });
    }
    else if (distributororders) {
        res.status(200).json({ distributororders });
    }
};
exports.index = index;
const fetchDistributorOrders = async (req, res) => {
    const { response: distributororders, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", `
    SELECT do.ref, do.status, do.created_at FROM distributor_orders do
    INNER JOIN distributor_address da ON da.id = do.distributor_id
    WHERE do.distributor_id = ? 
  `, null, [req.session.user_id]);
    if (error) {
        res.status(500).json({ message: "error fetching distributororders" });
    }
    else if (distributororders) {
        res.status(200).json({ orders: distributororders[0] });
    }
};
exports.fetchDistributorOrders = fetchDistributorOrders;
const fetchDistributorOrderByRef = async (req, res) => {
    const { response: distributororders, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", `
    SELECT do.ref, do.status, do.created_at, dop.name, dop.slug, pc.name, pc.slug FROM distributor_orders do
    INNER JOIN distributor_address da ON da.id = do.distributor_id
    INNER JOIN distributor_order_packages dop ON dop.order_id = do.id
    INNER JOIN package_categories pc ON pc.id = dop.package_id
    WHERE do.distributor_id = ?
    LIMIT 1 
  `, null, [req.session.user_id]);
    if (error) {
        res.status(500).json({ message: "error fetching distributororders" });
    }
    else if (distributororders) {
        res.status(200).json({ order: distributororders[0] });
    }
};
exports.fetchDistributorOrderByRef = fetchDistributorOrderByRef;
const store = async (req, res) => {
    const distributorOrder = req.body;
    distributorOrder.ref = (0, StrHelper_1.makeRef)(6);
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", "INSERT", ["distributor_id", "distributor_address_id", "ref"], [distributorOrder.distributorId, distributorOrder.distributorAddressId, distributorOrder.ref]);
    if (error) {
        res.status(500).json({ message: "error fetching distributororders" });
    }
    else if (response?.affectedRows) {
        const orderPackages = [];
        for (const orderPackage of req.body.packages) {
            orderPackages.push([response.insertId, orderPackage[0], orderPackage[1]]);
        }
        const { response: orderPacakgesResponse, error: orderPackagesError } = await (0, queryHelpers_1.execQuery)("distributor_order_packages", "BATCHINSERT", ["distributor_order_id", "package_id", "quantity"], orderPackages);
        res.status(200).json({ status: orderPacakgesResponse?.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributororders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_orders", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributororders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
