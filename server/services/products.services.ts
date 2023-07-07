import { execQuery } from "@/helpers/queryHelpers";
import { IProduct } from "@/models/Product.model";
import { execResponse } from "./response.services";
import { Client } from "@/types/common.types";

const TABLE_NAME = "products";


export const fetchProducts = async (client: Client, {perPage, offset, cat} : {perPage: number, offset: number, cat?: string}) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, pc.name as category_name, pc.slug as category_slug, p.description${client === "admin" ? ', p.views, p.created_at' : ''} FROM products p
INNER JOIN (SELECT p.id FROM products p LIMIT ${perPage} OFFSET ${offset}) AS tmp USING (id)
INNER JOIN product_categories pc ON pc.id = p.category_id
    ${cat ? 'WHERE pc.slug = ?' : ''} ORDER BY id DESC`;

    const { response, error }  = await execQuery<[IProduct[]][]>(TABLE_NAME, query, null, cat ? [ cat ] : null);

    return execResponse<IProduct[]>(response, error);
};

export const fetchProductsBySlug = async (slug: string) => {
    const query = `SELECT p.id, pc.name as category_name, p.category_id, p.name as name, p.slug as slug, p.description 
FROM products p
JOIN product_categories pc ON pc.id = p.category_id
WHERE p.slug = ? LIMIT 1`;
    const { response, error } = await execQuery<[IProduct[]][]>(TABLE_NAME, query, null, [ slug ]);

    return execResponse<IProduct[]>(response, error);
};

export const fetchProductsByCategorySlug = async ({perPage, offset, slug} : {perPage?: number, offset?: number, slug: string}) => {
    const query = `SELECT pc.name as category_name, pc.slug as category_slug, p.id p.name, p.slug FROM products p 
INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?`
    
    const { response, error } = await execQuery<[IProduct[]][]>(TABLE_NAME, query, null, [slug]);

    return execResponse<IProduct[]>(response, error);
}

export const fetchRelatedProductsByProductId = async (categoryId: number) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8`;
    const { response, error } = await execQuery<[IProduct[]][]>(TABLE_NAME, query, null, [categoryId]);

    return execResponse<IProduct[]>(response, error);
};

export const fetchProductsByProductIdArray = async (client: Client, idArray: number[], {perPage, offset, cat} : {perPage: number, offset: number, cat?: string}) => {
    const query = `SELECT p.id, p.name as name, p.slug as slug, pc.name as category_name, pc.slug as category_slug, p.description${client === "admin" ? ', p.views, p.created_at' : ''} FROM products p
    INNER JOIN (SELECT p.id FROM products p LIMIT ${perPage} OFFSET ${offset}) AS tmp USING (id)
    INNER JOIN product_categories pc ON pc.id = p.category_id
    ${cat ? 'WHERE pc.slug = ?' : ''} WHERE p.id IN (${',?'.repeat(idArray.length).slice(1)}) ORDER BY id DESC`;
    
    const { response, error } = await execQuery<[IProduct[]][]>(TABLE_NAME, query, null, [idArray]);
    return execResponse<IProduct[]>(response, error);
};