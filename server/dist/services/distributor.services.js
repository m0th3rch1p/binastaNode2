"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDistributor = exports.authenticateDistributor = exports.registerDistributor = exports.fetchDistributorBySlug = exports.fetchDistributorById = exports.fetchDistributors = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const domain_services_1 = require("./domain.services");
const TABLE_NAME = "distributors";
const fetchDistributors = async () => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, first_name, last_name, email, store_name, phone_number, gender, reward_points, verified, created_at FROM distributors");
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributors = fetchDistributors;
const fetchDistributorById = async (id) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, first_name, last_name, email, store_name, phone_number, gender, reward_points, verified, created_at FROM distributors WHERE id = ?", null, [id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorById = fetchDistributorById;
const fetchDistributorBySlug = async (distributor) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "SELELECTBYCOL", ["referal_code"], [distributor.referal_code]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchDistributorBySlug = fetchDistributorBySlug;
const registerDistributor = async (distributor) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "INSERT", ["country_id", "referal_code", "store_name", "first_name", "last_name", "email", "password", "phone_number", "gender", "parent"], [distributor.country_id, distributor.referal_code, distributor.store_name, distributor.first_name, distributor.last_name, distributor.email, distributor.password, distributor.phone_number, distributor.gender, distributor.parent]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.registerDistributor = registerDistributor;
const authenticateDistributor = async (distributor) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("distributors", "AUTH", null, [distributor.email]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.authenticateDistributor = authenticateDistributor;
const verifyDistributor = async (id) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, store_name, parent FROM distributors WHERE id = ?", null, [id]);
    const distributor = (0, response_services_1.execResponse)(response, error);
    if (!distributor)
        return null;
    const { response: parentResponse, error: parentError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id FROM distributors d INNER JOIN (SELECT parent, COUNT(id) as child_count FROM distributors GROUP BY parent) ds ON ds.parent = d.id WHERE id = ?", null, [id]);
    const parent = (0, response_services_1.execResponse)(parentResponse, parentError);
    if (!parent)
        return null;
    else if (parent.length) {
        let depth = parent[0].child_count;
        if (depth < 3) {
            if (depth == 0)
                parent[0].reward_points += 12;
            else if (depth == 1)
                parent[0].reward_points += 4;
            else if (depth == 2)
                parent[0].reward_points += 1;
            await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATE distributors SET reward_points=? WHERE id=?", null, [parent[0].reward_points, parent[0].id]);
        }
    }
    //Create domain for distributor
    const domain = {
        distributor_id: distributor[0].id,
        domain: distributor[0].store_name
    };
    await (0, domain_services_1.storeDomain)(domain);
    const { response: verificationResponse, error: verificationError } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATE distributors set verified = true WHERE id = ?", null, [distributor[0].id]);
    return (0, response_services_1.execResponse)(verificationResponse, verificationError);
};
exports.verifyDistributor = verifyDistributor;
