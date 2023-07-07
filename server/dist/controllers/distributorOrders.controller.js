"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorOrderById = exports.fetchDistributorOrderByRef = exports.fetchDistributorOrders = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const distributorOrderServices = __importStar(require("../services/distributorOrders.services"));
const productVariations_services_1 = require("../services/productVariations.services");
const index = async (req, res) => {
    const orders = await distributorOrderServices.fetchOrders("admin");
    if (!orders) {
        res.status(500).json({ message: 'Error fetching distributor orders' });
    }
    else {
        res.status(200).json({ orders });
    }
};
exports.index = index;
const fetchDistributorOrders = async (req, res) => {
    const orders = await distributorOrderServices.fetchOrders(req.session.role === "admin" ? "admin" : "distributor", req.session.role === "admin" ? parseInt(req.params.id) : req.session.user_id);
    if (!orders) {
        res.status(500).json({ message: 'Error fetching distributor orders' });
    }
    else {
        res.status(200).json({ orders });
    }
};
exports.fetchDistributorOrders = fetchDistributorOrders;
const fetchDistributorOrderByRef = async (req, res) => {
    const order = await distributorOrderServices.fetchOrderByRef("distributor", req.params.ref, req.session.user_id);
    if (!order) {
        res.status(500).json({ message: 'Error fetching order' });
    }
    else if (!order.length) {
        res.status(404).json({ message: 'Could not find order' });
    }
    else {
        res.status(200).json({ order: order[0] });
    }
};
exports.fetchDistributorOrderByRef = fetchDistributorOrderByRef;
const fetchDistributorOrderById = async (req, res) => {
    const order = await distributorOrderServices.fetchOrderById("distributor", parseInt(req.params.id), req.session.user_id);
    if (!order) {
        res.status(500).json({ message: 'Error fetching order' });
        return;
    }
    else if (!order.length) {
        res.status(404).json({ message: 'Could not find order' });
        return;
    }
    const productVariationIdsArr = await distributorOrderServices.fetchOrderProductVariationsById(order[0].id);
    console.log(productVariationIdsArr);
    if (!productVariationIdsArr) {
        res.status(500).json({ message: 'Error fetching order' });
        return;
    }
    const productVariationIds = productVariationIdsArr.map((productVariation) => productVariation.product_variation_id);
    const productVariations = await (0, productVariations_services_1.fetchProductVariationsbyIdArray)("distributor", productVariationIds);
    order[0].variations = productVariations;
    res.status(200).json({ order: order[0] });
};
exports.fetchDistributorOrderById = fetchDistributorOrderById;
const store = async (req, res) => {
    const distributorOrder = req.body;
    distributorOrder.ref = (0, StrHelper_1.makeRef)(6);
    distributorOrder.distributor_id = req.session.user_id;
    const results = await distributorOrderServices.store(distributorOrder, req.body.product_variations, req.session.user_id);
    if (!results) {
        res.status(500).json({ message: "Error storing orders" });
    }
    else {
        res.status(200).json({ status: results.affectedRows, id: results.insertId });
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
