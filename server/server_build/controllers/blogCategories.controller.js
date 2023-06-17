"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
const queryHelpers_1 = require("@/helpers/queryHelpers");
const StrHelper_1 = require("@/helpers/StrHelper");
const TABLE_NAME = "blog_categories";
const index = async (req, res) => {
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "SELECT", ['id', 'name', 'slug', 'created_at']);
    if (error) {
        res.status(500).json({ message: 'Error fetching blog categories' });
    }
    else if (response) {
        const [categories] = response;
        res.status(200).json({ categories });
    }
};
exports.index = index;
const store = async (req, res) => {
    const blogCategory = req.body;
    blogCategory.slug = (0, StrHelper_1.slugify)(blogCategory.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "INSERT", ['name', 'slug'], [blogCategory.name, blogCategory.slug]);
    if (error) {
        res.status(500).json({ message: 'Error inserting blog category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.store = store;
//@ts-expect-error
const updateById = async (req, res) => {
    const blogCategory = req.body;
    blogCategory.slug = (0, StrHelper_1.slugify)(blogCategory.name);
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [blogCategory.name, blogCategory.slug, blogCategory.id]);
    if (error) {
        res.status(500).json({ message: 'Error updating blog category' });
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
        res.status(500).json({ message: 'Error deleting blog category' });
    }
    else if (response) {
        res.status(200).json({ status: response.affectedRows });
    }
};
exports.destroyById = destroyById;
