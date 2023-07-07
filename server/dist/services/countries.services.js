"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countriesStats = exports.destroyCountryById = exports.updateCountryById = exports.storeCountry = exports.fetchCountriesBySlug = exports.fetchCountries = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const StrHelper_1 = require("../helpers/StrHelper");
const TABLE_NAME = "countries";
const fetchCountries = async (client) => {
    const { response, error } = client === "admin" ? await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTALL") : await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, name, country_code FROM countries", null, null);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchCountries = fetchCountries;
const fetchCountriesBySlug = async (slug, client) => {
    const { response, error } = client === "admin" ? await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, name, country_code, created_at FROM countries WHERE slug=?", null, [slug]) : await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT id, name, country_code FROM countries WHERE slug=?", null, [slug]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchCountriesBySlug = fetchCountriesBySlug;
const storeCountry = async (country) => {
    country.slug = (0, StrHelper_1.slugify)(country.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "INSERT", ['name', 'slug', 'country_code'], [country.name, country.slug, country.country_code]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeCountry = storeCountry;
const updateCountryById = async (country) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "UPDATEBYID", ['name', 'slug', 'country_code'], [country.name, country.slug, country.country_code, country.id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.updateCountryById = updateCountryById;
const destroyCountryById = async (id) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)("countries", "DELETEBYID", ['id'], [id]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.destroyCountryById = destroyCountryById;
const countriesStats = async () => {
};
exports.countriesStats = countriesStats;
