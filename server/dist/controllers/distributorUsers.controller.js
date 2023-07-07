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
exports.destroyById = exports.updateById = exports.authenticate = exports.register = exports.fetchDistributorUsers = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const distributorUserServices = __importStar(require("../services/distribributorUsers.services"));
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
const fetchDistributorUsers = async (req, res) => {
    const users = await distributorUserServices.fetchDistributorUsers("distributor", req.session.user_id);
    if (!users) {
        res.status(500).json({ message: "error fetching users" });
        return;
    }
    const stats = await distributorUserServices.fetchDistributorUsersStat("distributor", req.session.user_id);
    res.status(200).json({ users, stats });
};
exports.fetchDistributorUsers = fetchDistributorUsers;
const register = async (req, res) => {
    const distributorUser = req.body;
    distributorUser.distributor_id = req.session.tenant_id;
    const registrationResults = await distributorUserServices.registerDistributorUser(distributorUser);
    if (!registrationResults || !registrationResults.affectedRows) {
        res.status(422).json({ message: "Invalid credentials" });
        return;
    }
    req.session.user_id = registrationResults.insertId;
    req.session.role = "user";
    res.status(200).json({ status: registrationResults.affectedRows });
};
exports.register = register;
const authenticate = async (req, res) => {
    const distributorUser = req.body;
    distributorUser.distributor_id = req.session.tenant_id;
    const authenticationResults = await distributorUserServices.authenticateDistributorUser(distributorUser);
    if (!authenticationResults || !authenticationResults.length) {
        res.status(422).json({ message: "Invalid credentials" });
        return;
    }
    req.session.user_id = authenticationResults[0].id;
    req.session.role = "user";
    res.status(200).json({ status: true });
};
exports.authenticate = authenticate;
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
