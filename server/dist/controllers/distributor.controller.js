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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.destroyById = exports.updateById = exports.verify = exports.authenticate = exports.store = exports.fetchDistributorById = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const bcrypt_1 = __importDefault(require("bcrypt"));
const distributorServices = __importStar(require("../services/distributor.services"));
const index = async (req, res) => {
    const distributors = await distributorServices.fetchDistributors();
    if (!distributors) {
        res.status(500).json({ message: 'Error fetching distributors' });
    }
    else {
        res.status(200).json({ distributors });
    }
};
exports.index = index;
const fetchDistributorById = async (req, res) => {
    const distributor = await distributorServices.fetchDistributorById(parseInt(req.params.id));
    if (!distributor) {
        res.status(500).json({ message: 'Error fetching distributor' });
        return;
    }
    else if (!distributor.length) {
        res.status(404).json({ message: 'Distributor not found' });
        return;
    }
    return res.status(200).json({ distributor: distributor[0] });
};
exports.fetchDistributorById = fetchDistributorById;
const store = async (req, res) => {
    const distributor = req.body;
    distributor.referal_code = (0, StrHelper_1.makeRef)(6);
    const refResponse = await distributorServices.fetchDistributorBySlug(req.body.parent);
    if (refResponse !== null && refResponse[0]) {
        distributor.parent = refResponse[0].id;
    }
    else
        distributor.parent = null;
    distributor.password = await bcrypt_1.default.hash(distributor.password, 10);
    const response = await distributorServices.registerDistributor(distributor);
    if (response && response.insertId) {
        req.session.user_id = response.insertId;
        req.session.role = "distributor";
        res.status(200).json({ status: response.affectedRows });
    }
    else {
        res.status(500).json({ message: "error registering distributor" });
    }
};
exports.store = store;
const authenticate = async (req, res) => {
    const distributor = req.body;
    const response = await distributorServices.authenticateDistributor(distributor);
    if (response && response[0]) {
        req.session.user_id = response[0].id;
        req.session.role = "distributor";
        res.status(200).json({ status: true });
    }
    else {
        res.status(500).json({ message: "invalid email / password combination" });
    }
};
exports.authenticate = authenticate;
//@ts-expect-error
const verify = async (req, res) => {
    const verificationResponse = await distributorServices.verifyDistributor(req.body.id);
    if (!verificationResponse) {
        res.status(500).json({ message: "error verifying distributor" });
    }
    else if (verificationResponse) {
        res.status(200).json({ status: verificationResponse.affectedRows });
    }
};
exports.verify = verify;
//@ts-expect-error
const updateById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "UPDATEBYID", [], []);
    if (error) {
        res.status(500).json({ message: "error updating distributors" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "DELETEBYID", ["id"], [req.params.id]);
    if (error) {
        res.status(500).json({ message: "error deleting distributors" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
const logout = async () => {
};
exports.logout = logout;
