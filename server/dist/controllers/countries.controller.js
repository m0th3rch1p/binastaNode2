"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorCountryBySlug = exports.fetchDistributorCountries = exports.index = void 0;
const StrHelper_1 = require("../helpers/StrHelper");
const queryHelpers_1 = require("../helpers/queryHelpers");
const index = async (req, res) => {
    const { response: countries, error } = await (0, queryHelpers_1.execQuery)("countries", "SELECTALL");
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.index = index;
const fetchDistributorCountries = async (req, res) => {
    const { response: countries, error } = await (0, queryHelpers_1.execQuery)("countries", "SELECT", ["name", "country_code"]);
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.fetchDistributorCountries = fetchDistributorCountries;
const fetchDistributorCountryBySlug = async (req, res) => {
    const { response: countries, error } = await (0, queryHelpers_1.execQuery)("countries", `
        
    `);
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.fetchDistributorCountryBySlug = fetchDistributorCountryBySlug;
const store = async (req, res) => {
    const country = req.body;
    country.slug = (0, StrHelper_1.slugify)(country.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "INSERT", ['name', 'slug', 'country_code'], [country.name, country.slug, country.countryCode]);
    if (error) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ status: response?.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const country = req.body;
    country.slug = (0, StrHelper_1.slugify)(country.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "UPDATEBYID", ['name', 'slug', 'country_code'], [country.name, country.slug, country.countryCode, country.id]);
    if (error) {
        res.status(500).json({ message: "Error updating country" });
    }
    else {
        res.status(200).json({ status: response?.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const country = { ...req.params, ...req.body };
    country.slug = (0, StrHelper_1.slugify)(country.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "DELETEBYID", ['id'], [country.name, country.slug, country.countryCode, country.id]);
    if (error) {
        res.status(500).json({ message: "Error deleting countries" });
    }
    else {
        res.status(200).json({ status: response?.affectedRows });
    }
};
exports.destroyById = destroyById;
