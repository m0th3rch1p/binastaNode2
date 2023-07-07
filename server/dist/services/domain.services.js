"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDomainByName = exports.storeDomain = exports.fetchDomains = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "domains";
const fetchDomains = async (domain) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL");
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDomains = fetchDomains;
const storeDomain = async (domain) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT INTO domains (distributor_id, domain) VALUES (?, ?)", null, [domain.distributor_id, domain.domain]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeDomain = storeDomain;
const fetchDomainByName = async (domain) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT distributor_id, domain FROM domains WHERE domain = ? LIMIT 1", null, [domain]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDomainByName = fetchDomainByName;
