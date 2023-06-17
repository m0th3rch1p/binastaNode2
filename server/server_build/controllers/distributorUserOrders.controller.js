"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
const StrHelper_1 = require("@/helpers/StrHelper");
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
const store = async (req, res) => {
    const distributorUserOrder = req.body;
    distributorUserOrder.ref = (0, StrHelper_1.makeRef)(6);
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_orders", "INSERT", ["distributor_user_id", "distributor_user_address_id", "ref"], [distributorUserOrder.distributorUserId, distributorUserOrder.distributorUserAddressId, distributorUserOrder.ref]);
    if (error) {
        res.status(500).json({ message: "error fetching distributoruserorders" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
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
