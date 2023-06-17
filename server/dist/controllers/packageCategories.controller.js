"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.fetchBySlug = exports.index = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const StrHelper_1 = require("../helpers/StrHelper");
const TABLE_NAME = "package_categories";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT", ['name', 'slug', 'created_at']);
    if (error) {
        res.status(500).json({ message: 'Error fetching pacakge categories' });
    }
    else if (response) {
        const [categories] = response;
        res.status(200).json({ categories });
    }
};
exports.index = index;
//@ts-expect-error
const fetchBySlug = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECTBYCOL", ['slug'], [req.params]);
    if (error) {
        res.status(500).json({ message: 'Error fetching pacakge categories' });
    }
    else if (response) {
        const [categories] = response;
        res.status(200).json({ category: categories[0] });
    }
};
exports.fetchBySlug = fetchBySlug;
const store = async (req, res) => {
    const packageCategory = req.body;
    packageCategory.slug = (0, StrHelper_1.slugify)(packageCategory.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['name', 'slug'], [packageCategory.name, packageCategory.slug]);
    if (error) {
        res.status(500).json({ message: 'Error inserting package category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const packageCategory = req.body;
    packageCategory.slug = (0, StrHelper_1.slugify)(packageCategory.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [packageCategory.name, packageCategory.slug, packageCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating package category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.updateById = updateById;
//@ts-expect-error
const destroyById = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "DELETEBYID", null, [req.params.id]);
    if (error) {
        res.status(500).json({ message: 'Error deleting package category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
