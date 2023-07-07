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
exports.destroyById = exports.updateById = exports.markDelivered = exports.store = exports.fetchDistributorUserOrdersBySlug = exports.fetchDistributorUserOrders = exports.fetchUserOrderById = exports.fetchUserOrders = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const distributorUserOrderServices = __importStar(require("../services/distributorUserOrders.services"));
const index = async (req, res) => {
    const { response: distributoruserorders, error } = await (0, queryHelpers_1.execQuery)("distributor_user_orders", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributoruserorders" });
    }
    else if (distributoruserorders) {
        res.status(200).json({ distributoruserorders });
    }
};
exports.index = index;
const fetchUserOrders = async (req, res) => {
    const orders = await distributorUserOrderServices.fetchDistributorUserOrders("user", req.session.user_id);
    if (!orders) {
        res.status(500).json({ message: 'Error fetching orders' });
        return;
    }
    res.status(200).json({ orders });
};
exports.fetchUserOrders = fetchUserOrders;
const fetchUserOrderById = async (req, res) => {
    const orderResponse = await distributorUserOrderServices.fetchDistributorUserOrderById("user", parseInt(req.params.id), req.session.user_id);
    if (!orderResponse) {
        res.status(500).json({ message: 'Error fetching user orders' });
        return;
    }
    return res.status(200).json({ ...orderResponse });
};
exports.fetchUserOrderById = fetchUserOrderById;
const fetchDistributorUserOrders = async (req, res) => {
    const orders = await distributorUserOrderServices.fetchDistributorUserOrders("distributor", req.session.user_id);
    if (!orders) {
        res.status(500).json({ message: 'Error fetching orders' });
        return;
    }
    res.status(200).json({ orders });
};
exports.fetchDistributorUserOrders = fetchDistributorUserOrders;
const fetchDistributorUserOrdersBySlug = async (req, res) => {
    const order = await distributorUserOrderServices.fetchDistributorUserOrderByRef("distributor", req.session.user_id, req.params.ref);
    if (!order) {
        res.status(500).json({ message: 'Error fetching orders' });
        return;
    }
    else if (!order.order) {
        res.status(404).json({ message: 'order not found' });
        return;
    }
    res.status(200).json({ ...order });
};
exports.fetchDistributorUserOrdersBySlug = fetchDistributorUserOrdersBySlug;
const store = async (req, res) => {
    const distributorUserOrder = req.body;
    distributorUserOrder.ref = (0, StrHelper_1.makeRef)(6);
    distributorUserOrder.distributor_user_id = req.session.user_id;
    distributorUserOrder.distributor_user_address_id = req.body.user_address_id;
    const response = await distributorUserOrderServices.storeDistributorUserOrder(distributorUserOrder, req.body.product_variations);
    if (!response) {
        res.status(500).json({ message: "error fetching distributoruserorders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows, id: response.insertId });
    }
};
exports.store = store;
const markDelivered = async (req, res) => {
    const status = await distributorUserOrderServices.markDistriutorUserOrderDelivered(req.body.order_id, req.session.user_id);
    if (!status) {
        res.status(500).json({ message: "error fetching marking ordered as delivered" });
        return;
    }
    res.status(200).json({ status: status.affectedRows });
};
exports.markDelivered = markDelivered;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_orders", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributoruserorders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_orders", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributoruserorders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
