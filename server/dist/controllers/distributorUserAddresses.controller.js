"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const index = async (req, res) => {
    const { response: distributoruseraddresses, error } = await (0, queryHelpers_1.execQuery)("distributor_user_addresses", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributoruseraddress" });
    }
    else if (distributoruseraddresses) {
        res.status(200).json({ distributoruseraddresses });
    }
};
exports.index = index;
const store = async (req, res) => {
    const distributorUserAddress = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_addresses", "INSERT", ["distributor_user_id", "address", "phone_number"], [distributorUserAddress.distributor_user_id, distributorUserAddress.address, distributorUserAddress.phoneNumber]);
    if (error) {
        res.status(500).json({ message: "error fetching distributoruseraddress" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_addresses", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributoruseraddress" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_user_addresses", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributoruseraddress" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
