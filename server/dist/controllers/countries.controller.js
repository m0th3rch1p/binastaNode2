"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchDistributorCountryBySlug = exports.fetchDistributorCountries = exports.index = void 0;
const StrHelper_1 = require("../helpers/StrHelper");
const countriesServices = __importStar(require("../services/countries.services"));
const index = async (req, res) => {
    const countries = await countriesServices.fetchCountries("admin");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.index = index;
const fetchDistributorCountries = async (req, res) => {
    const countries = await countriesServices.fetchCountries("distributor");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.fetchDistributorCountries = fetchDistributorCountries;
const fetchDistributorCountryBySlug = async (req, res) => {
    const countries = await countriesServices.fetchCountriesBySlug(req.params.slug, "distributor");
    if (!countries) {
        res.status(500).json({ message: "Error fetching countries" });
    }
    else {
        res.status(200).json({ countries });
    }
};
exports.fetchDistributorCountryBySlug = fetchDistributorCountryBySlug;
const store = async (req, res) => {
    const country = req.body;
    const results = await countriesServices.storeCountry(country);
    if (!results) {
        res.status(500).json({ message: "Error storing country" });
    }
    else {
        res.status(200).json(results);
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const country = req.body;
    country.slug = (0, StrHelper_1.slugify)(country.name);
    const results = countriesServices.updateCountryById(country);
    if (!results) {
        res.status(500).json({ message: "Error update country by id" });
    }
    else {
        res.status(200).json(results);
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const results = countriesServices.destroyCountryById(req.params.id);
    if (!results) {
        res.status(500).json({ message: "Error deleting country by id" });
    }
    else {
        res.status(200).json(results);
    }
};
exports.destroyById = destroyById;
