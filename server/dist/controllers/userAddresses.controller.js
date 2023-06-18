"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fethUserAddresses = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const TABLE_NAME = "user_addresses";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL");
    if (error)
        res.status(500).json({ message: 'Error fetching user addresses' });
    else if (response) {
        const [addresses] = response;
        res.status(200).json({ addresses });
    }
};
exports.index = index;
const fethUserAddresses = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, `SELECT address, phone_number FROM ${TABLE_NAME} WHERE user_id = ?`, null, [req.session.user_id]);
    if (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching user addresses' });
    }
    else if (response) {
        const [addresses] = response;
        res.status(200).json({ addresses });
    }
};
exports.fethUserAddresses = fethUserAddresses;
const store = async (req, res) => {
    const userAddress = req.body;
    userAddress.userId = req.session.user_id;
    userAddress.phoneNumber = req.body.phone_number;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['user_id', 'address', 'phone_number'], [userAddress.userId, userAddress.address, userAddress.phoneNumber]);
    if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving user address' });
    }
    else if (response) {
        const { affectedRows, insertId } = response[0];
        console.log(response);
        res.status(200).json({ status: affectedRows, id: insertId });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
};
exports.destroyById = destroyById;
