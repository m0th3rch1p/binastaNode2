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
exports.destroyById = exports.updateById = exports.store = exports.fetchUserAddresses = exports.fetchAddresses = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const distributorUserAddressServices = __importStar(require("../services/distributorUserAddresses.services"));
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
const fetchAddresses = async (req, res) => {
    const addresses = await distributorUserAddressServices.fetchDistributorUserAddresses("distributor");
    if (!addresses) {
        res.status(500).json({ message: "error fetching addresses" });
        return;
    }
    res.status(200).json({ addresses });
};
exports.fetchAddresses = fetchAddresses;
const fetchUserAddresses = async (req, res) => {
    const addresses = await distributorUserAddressServices.fetchDistributorUserAddresses("user", req.session.user_id);
    if (!addresses) {
        res.status(500).json({ message: "error fetching addresses" });
        return;
    }
    res.status(200).json({ addresses });
};
exports.fetchUserAddresses = fetchUserAddresses;
const store = async (req, res) => {
    const distributorUserAddress = req.body;
    distributorUserAddress.distributor_user_id = req.session.user_id;
    const response = await distributorUserAddressServices.storeDistributorUserAddress(distributorUserAddress);
    if (!response) {
        res.status(500).json({ message: "error storing address" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows, id: response.insertId });
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
