"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateDistributorUser = exports.registerDistributorUser = exports.fetchDistributorUsersStat = exports.fetchDistributorUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_users";
const fetchDistributorUsers = async (client, distributorId) => {
    const query = `SELECT email, created_at FROM ${TABLE_NAME}${client === "distributor" ? ' WHERE distributor_id = ?' : ''}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "distributor" ? [distributorId] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorUsers = fetchDistributorUsers;
const fetchDistributorUsersStat = async (client, distributorId) => {
    const query = `SELECT MONTH(created_at) as registered_at, SUM(id) as total_users FROM ${TABLE_NAME} ${client === "distributor" ? 'WHERE distributor_id = ? GROUP BY registered_at' : ''}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "distributor" ? [distributorId] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorUsersStat = fetchDistributorUsersStat;
const registerDistributorUser = async (args) => {
    args.password = await bcrypt_1.default.hash(args.password, 10);
    const query = `INSERT INTO ${TABLE_NAME} (email, password, distributor_id) VALUES (?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [args.email, args.password, args.distributor_id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.registerDistributorUser = registerDistributorUser;
const authenticateDistributorUser = async (args) => {
    const query = `SELECT id, email, password FROM ${TABLE_NAME} WHERE email=? AND distributor_id=? LIMIT 1`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [args.email, args.distributor_id]);
    const results = (0, response_services_1.execResponse)(response, error);
    if (!results || !results.length)
        return null;
    const pwdMatch = await bcrypt_1.default.compare(args.password, results[0].password);
    if (!pwdMatch)
        return null;
    return results;
};
exports.authenticateDistributorUser = authenticateDistributorUser;
