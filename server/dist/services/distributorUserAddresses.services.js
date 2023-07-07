"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDistributorUserAddress = exports.fetchDistributorUserAddresses = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "distributor_user_addresses";
const fetchDistributorUserAddresses = async (client, user_id) => {
    const query = `SELECT ${client === "distributor" ? "du.email, " : ""}distributor_user_id, address, phone_number FROM distributor_user_addresses dua
    ${client === "distributor" ? ` INNER JOIN distributor_users du ON du.id = dua.distributor_user_id` : ``}
    ${client === "user" ? ' WHERE distributor_user_id=' + user_id : ''}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [user_id] : null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorUserAddresses = fetchDistributorUserAddresses;
const storeDistributorUserAddress = async (address) => {
    const query = `INSERT INTO distributor_user_addresses (distributor_user_id, address, phone_number) VALUES (?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [address.distributor_user_id, address.address, address.phone_number]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeDistributorUserAddress = storeDistributorUserAddress;
