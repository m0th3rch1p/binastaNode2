"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.authenticate = exports.store = exports.index = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const queryHelpers_1 = require("@/helpers/queryHelpers");
const TABLE_NAME = "users";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT", ['id', 'email', 'created_at']);
    if (error)
        res.status(500).json({ message: 'Error fetching users. Please try again' });
    else if (response) {
        const [users] = response;
        res.status(200).json({ users: users });
    }
};
exports.index = index;
const store = async (req, res) => {
    const user = req.body;
    user.password = await bcrypt_1.default.hash(user.password, 10);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['email', 'password'], [user.email, user.password]);
    if (error)
        res.status(500).json({ message: 'Error registering user. Please try again' });
    else if (response && response.length) {
        req.session.user_id = response[0].insertId;
        req.session.role = 'user';
        console.log(response);
        res.status(200).json({ status: true });
    }
};
exports.store = store;
const authenticate = async (req, res) => {
    const user = req.body;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "AUTH", null, [user.email]);
    if (error)
        res.status(500).json({ message: 'Error authenticating user. Please try again' });
    else if (response) {
        const [userArr] = response;
        if (userArr.length) {
            const match = await bcrypt_1.default.compare(user.password, userArr[0].password);
            if (match) {
                req.session.user_id = userArr[0].id;
                req.session.role = 'user';
                res.status(200).json({ status: true });
            }
            else
                res.status(401).json({ status: false, message: 'Invalid credentials' });
        }
        else
            res.status(401).json({ status: false, message: 'Invalid credentials' });
    }
    else
        res.status(500).json({ message: 'Error authenticating user. Please try again' });
};
exports.authenticate = authenticate;
//@ts-expect-error
const updateById = async (req, res) => {
    const user = { ...req.params, ...req.body };
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "DELETEBYID", null, [req.params.id]);
    if (error)
        res.status(500).json({ message: 'Error deleting user. Please try again' });
    else if (response) {
        const { affectedRows } = response[0];
        res.status(200).json({ status: affectedRows });
    }
};
exports.destroyById = destroyById;
