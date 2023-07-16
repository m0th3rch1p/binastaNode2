"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBlogByRef = exports.storeBlog = exports.fetchBlogs = void 0;
const queryHelpers_1 = require("../helpers/queryHelpers");
const response_services_1 = require("./response.services");
const TABLE_NAME = "blogs";
const fetchBlogs = async (client) => {
    const query = `SELECT b.title, b.slug, b.description, b.image_path, bc.name as category_name FROM ${TABLE_NAME} b
INNER JOIN blog_categories bc ON b.blog_category_id = bc.id`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchBlogs = fetchBlogs;
const storeBlog = async (blog) => {
    const query = `INSERT INTO ${TABLE_NAME} (blog_category_id, title, slug, description, post, image_path) VALUES (?, ?, ?, ?, ?, ?)`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [blog.blog_category_id, blog.title, blog.slug, blog.description, blog.post, blog.image_path]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.storeBlog = storeBlog;
const fetchBlogByRef = async (client, ref) => {
    const query = `SELECT b.title, b.slug, b.description, b.image_path, bc.name FROM ${TABLE_NAME} b WHERE slug=?
INNER JOIN blog_categories bc ON b.blog_category_id = bc.id`;
    const { response, error } = await (0, queryHelpers_1.execQuery)(TABLE_NAME, query, null, [ref]);
    return (0, response_services_1.execResponse)(response, error);
};
exports.fetchBlogByRef = fetchBlogByRef;
