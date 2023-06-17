"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const index = async (req, res) => {
    const { response: distributor_addresses, error } = await (0, queryHelpers_1.execQuery)("distributor_addresses", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributoraddress" });
    }
    else if (distributor_addresses) {
        res.status(200).json({ distributor_addresses });
    }
};
exports.index = index;
const store = async (req, res) => {
    const distributorAddress = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_addresses", "INSERT", ["distributor_id", "address", "phoneNumber"], [distributorAddress.distributorId, distributorAddress.address, distributorAddress.phoneNumber]);
    if (error) {
        res.status(500).json({ message: "error fetching distributor addresses" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_addresses", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributoraddress" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_addresses", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributoraddress" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
