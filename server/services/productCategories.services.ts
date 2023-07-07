import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IProductCategory } from "@/models/ProductCategory.model";

export type Client = "admin" | "distributor" | "user";
const TABLE_NAME = "product_categories";

export const fetchCategories = async (client: Client) => {
    const query = `SELECT id, name, slug, image_path, ${client === "admin" ? 'created_at' : ''} FROM product_categories`;
    const { response, error } = await execQuery<[IProductCategory[]][]>(TABLE_NAME, query);
    return execResponse<IProductCategory[]>(response, error);
};

export const storeCategory = async (category: IProductCategory) => {
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "INSERT", ['name', 'slug', 'image_path', 'ext'], [category.name, category.slug, category.image_path, category.ext]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);

}