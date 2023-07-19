import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { Client } from "@/types/common.types";
import { IBlog } from "@/models/Blog.model";

const TABLE_NAME = "blogs";

export const fetchBlogs = async (client: Client) => {
    const query = `SELECT b.title, b.slug, b.description, b.image_path, bc.name as category_name FROM ${TABLE_NAME} b
INNER JOIN blog_categories bc ON b.blog_category_id = bc.id`;
    const { response, error } = await execQuery<[IBlog[]][]>(TABLE_NAME, query);
    return execResponse<IBlog[]>(response, error);
};

export const storeBlog = async (blog: IBlog) => {
    const query = `INSERT INTO ${TABLE_NAME} (blog_category_id, title, slug, description, image_path) VALUES (?, ?, ?, ?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [ blog.blog_category_id, blog.title, blog.slug, blog.description, blog.post, blog.image_path ]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const fetchBlogByRef = async (client: Client, ref: string) => {
    const query = `SELECT b.title, b.slug, b.description, b.post, b.image_path, bc.name, b.created_at FROM ${TABLE_NAME} b JOIN blog_categories bc ON b.blog_category_id = bc.id WHERE b.slug=? `;
    const { response, error } = await execQuery<[IBlog[]][]>(TABLE_NAME, query, null, [ ref ]);
    return execResponse<IBlog[]>(response, error);
};