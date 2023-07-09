"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeMainMessage = exports.fetchMainMessages = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "main_messages";
const fetchMainMessages = async () => {
    const query = `SELECT * FROM main_messages ORDER BY DESC`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchMainMessages = fetchMainMessages;
const storeMainMessage = async (message) => {
    const query = `INSERT INTO main_messages(name, email, phone_number, message) VALUES (?, ?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [message.name, message.email, message.phone_number, message.message]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeMainMessage = storeMainMessage;
