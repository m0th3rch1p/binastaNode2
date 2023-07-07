"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.fetchDistributorAddresses = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const fetchDistributorAddresses = async (client, distributor_id) => {
    const { response, error } = client ? await (0, queryHelpers_1.execQuery)("distributor_addresses", "SELECTALL") : await (0, queryHelpers_1.execQuery)("distributor_addresses", "SELECT id, address, phone_number FROM distributor_addresses WHERE distributor_id =?", null, [distributor_id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorAddresses = fetchDistributorAddresses;
const store = async (address) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributor_addresses", "INSERT", ["distributor_id", "address", "phone_number"], [address.distributor_id, address.address, address.phone_number]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.store = store;
