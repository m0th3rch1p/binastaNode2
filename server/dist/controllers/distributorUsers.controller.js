"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const index = async (req, res) => {
    const { response: distributorusers, error } = await (0, queryHelpers_1.execQuery)("distributor_users", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributorusers" });
    }
    else if (distributorusers) {
        res.status(200).json({ distributorusers });
    }
};
exports.index = index;
const store = async (req, res) => {
    const distributorUser = req.body;
    distributorUser.password = await bcrypt_1.default.hash(distributorUser.password, 10);
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_users", "INSERT", ["distributor_id", "email", "password"], [distributorUser.distributorId, distributorUser.email, distributorUser.password]);
    if (error) {
        res.status(500).json({ message: "error fetching distributor users" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_users", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributorusers" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_users", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributorusers" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
