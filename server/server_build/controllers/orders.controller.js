"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchUserUserOrderById = exports.fetchUserOrders = exports.index = void 0;
const lodash_1 = __importDefault(require("lodash"));
const queryHelpers_1 = require("@/helpers/queryHelpers");
const StrHelper_1 = require("@/helpers/StrHelper");
const TABLE_NAME = "orders";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL");
    if (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
    else if (response) {
        const [orders] = response;
        res.status(200).json({ orders });
    }
};
exports.index = index;
const fetchUserOrders = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTBYCOL", ['ref', 'status', 'amount', 'created_at'], [req.session.user_id]);
    if (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
    else if (response) {
        const [orders] = response;
        res.status(200).json({ orders });
    }
};
exports.fetchUserOrders = fetchUserOrders;
const fetchUserUserOrderById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT ref, status, amount, created_at FROM orders WHERE id =? AND user_id = ?", null, [req.params.id, req.session.user_id]);
    if (error) {
        res.status(500).json({ message: "Error fetching order by id" });
    }
    else if (response) {
        const [orders] = response;
        const { response: orderProductVariationResponse } = await (0, queryHelpers_1.execQuery)("order_product_variations", "SELECT product_variation_id, quantity FROM order_product_variations WHERE order_id = ?", null, [req.params.id]);
        const groupedVariations = lodash_1.default.groupBy(orderProductVariationResponse?.[0], 'product_variation_id');
        const opvIds = orderProductVariationResponse?.[0].map(opv => opv.product_variation_id);
        const { response: productVariationsResponse } = await (0, queryHelpers_1.execQuery)("product_variations", "SELECT pv.id, pv.variation, pv.buy_price, p.name as product_name FROM product_variations pv INNER JOIN products p ON p.id = pv.product_id WHERE pv.id IN (?)", null, opvIds);
        const productVariationsEmbedded = lodash_1.default.map(productVariationsResponse?.[0], (pv) => {
            return {
                ...pv,
                quantity: groupedVariations?.[pv.id]
            };
        });
        res.status(200).json({ order: orders[0], product_variations: productVariationsEmbedded });
    }
};
exports.fetchUserUserOrderById = fetchUserUserOrderById;
const store = async (req, res) => {
    const order = req.body;
    order.ref = (0, StrHelper_1.makeRef)(8);
    order.userId = req.session.user_id;
    order.userAddressId = req.body.user_address_id;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", [
        "user_id",
        "user_address_id",
        "ref",
    ], [
        order.userId,
        order.userAddressId,
        order.ref
    ]);
    if (error) {
        console.log(error);
        res.status(500).json({ message: "Error storing order" });
    }
    else if (response) {
        const productVariations = req.body.product_variations;
        const orderProductVariations = [];
        productVariations.forEach((variation) => {
            orderProductVariations.push([response[0].insertId, variation[0], variation[1]]);
        });
        const { response: variationResponse, error } = await (0, queryHelpers_1.execQuery)("order_product_variations", "BATCHINSERT", [
            "order_id",
            "product_variation_id",
            "quantity"
        ], [orderProductVariations]);
        res.status(200).json({ status: variationResponse?.[0].affectedRows, id: variationResponse?.[0].insertId });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
};
exports.destroyById = destroyById;
