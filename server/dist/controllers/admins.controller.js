"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.authenticate = exports.store = exports.index = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const TABLE_NAME = "admins";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT", ['id', 'email', 'created_at']);
    if (error)
        res.status(500).json({ message: 'Error fetching admins. Please try again' });
    else if (response) {
        const [admins] = response;
        res.status(200).json({ admins });
    }
};
exports.index = index;
const store = async (req, res) => {
    const admin = req.body;
    admin.password = await bcrypt_1.default.hash(admin.password, 10);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['email', 'password'], [admin.email, admin.password]);
    if (error)
        res.status(500).json({ message: 'Error registering admin. Please try again' });
    else if (response) {
        const { affectedRows, insertId } = response;
        req.session.user_id = insertId;
        req.session.role = 'admin';
        res.status(200).json({ status: affectedRows });
    }
};
exports.store = store;
const authenticate = async (req, res) => {
    const admin = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "AUTH", null, [admin.email]);
    console.log(error);
    if (error)
        res.status(500).json({ message: 'Error authenticating admin. Please try again' });
    else if (response) {
        const [adminArr] = response;
        if (adminArr.length) {
            const match = await bcrypt_1.default.compare(admin.password, adminArr[0].password);
            if (match) {
                req.session.user_id = adminArr[0].id;
                req.session.role = 'admin';
                res.status(200).json({ status: true });
            }
            else
                res.status(401).json({ status: false, message: 'Invalid credentials' });
        }
        else
            res.status(401).json({ status: false, message: 'Invalid credentials' });
    }
    else
        res.status(500).json({ message: 'Error authenticating admin. Please try again' });
};
exports.authenticate = authenticate;
//@ts-expect-error
const updateById = async (req, res) => {
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
};
exports.destroyById = destroyById;
