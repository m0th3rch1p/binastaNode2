"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSubscribers = exports.storeSubscriber = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "shop_subscribers";
const storeSubscriber = async (subscriber) => {
    const query = `INSERT INTO ${TABLE_NAME}(email) VALUES (?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [subscriber.email]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeSubscriber = storeSubscriber;
const fetchSubscribers = async () => {
    const query = `SELECT email, created_at FROM ${TABLE_NAME}`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchSubscribers = fetchSubscribers;
