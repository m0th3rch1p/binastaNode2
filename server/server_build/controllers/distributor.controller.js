"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.verify = exports.authenticate = exports.store = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
const StrHelper_1 = require("@/helpers/StrHelper");
const bcrypt_1 = __importDefault(require("bcrypt"));
const index = async (req, res) => {
    const { response: distributors, error } = await (0, queryHelpers_1.execQuery)("distributors", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "error fetching distributors" });
    }
    else if (distributors) {
        res.status(200).json({ distributors });
    }
};
exports.index = index;
const store = async (req, res) => {
    const distributor = req.body;
    distributor.referalCode = (0, StrHelper_1.makeRef)(6);
    const { response: refResponse, error: refError } = await (0, queryHelpers_1.execQuery)("distributors", "SELELECTBYCOL", ["referal_code"], [distributor.referalCode]);
    if (refError) {
        res.status(500).json({ message: 'error fetching distributors' });
    }
    else if (refResponse && !refResponse[0].length) {
        const distributor = req.body;
        distributor.password = await bcrypt_1.default.hash(distributor.password, 10);
        const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "INSERT", ["country_id", "store_name", "full_name", "email", "password", "phone_number", "gender", "parent_id"], [distributor.countryId, distributor.storeName, distributor.fullName, distributor.email, distributor.password, distributor.phoneNumber, distributor.gender, distributor.parent]);
        req.session.user_id = response?.insertId;
        req.session.role = "distributor";
        if (error) {
            res.status(500).json({ message: "error registering distributor" });
        }
        else if (response) {
            res.status(200).json({ status: response.affectedRows });
        }
    }
};
exports.store = store;
const authenticate = async (req, res) => {
    const distributor = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "AUTH", null, [distributor.email]);
    if (error) {
        res.status(500).json({ message: "invalid emails / password combination" });
    }
    else {
        const [userArr] = response;
        req.session.user_id = userArr[0].id;
        req.session.role = "distributor";
        res.status(200).json({ status: true });
    }
};
exports.authenticate = authenticate;
//@ts-expect-error
const verify = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "UPDATEBYID", ["verified"], [true]);
    if (error) {
        res.status(500).json({ message: "error verifying distributor" });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
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
