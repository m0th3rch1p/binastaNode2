import { execQuery } from "@/helpers/queryHelpers";
import { IProductVariation } from "@/models/ProductVariation.model";
import { execResponse } from "./response.services";

export type Client = "admin" | "distributor" | "user" | "shop";
const TABLE_NAME = "product_variations";

export type dbInsertRecord = Pick<IProductVariation, "variation" | "buy_price" | "sale_rice" | "wholesale_min" | "wholesale_price" | "recommended_price">
export type dbClientRecord = Pick<IProductVariation, "variation" | "sale_rice">
export type dbDistributorRecord = Pick<IProductVariation, "variation" | "wholesale_min" | "wholesale_price" | "recommended_price">

export const fetchProductVariationsByProductId = async ({productId, client}:  {productId: number, client: Client}) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, 
${client === 'user' ? 'pv.buy_price' : 
client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : 
client === 'admin' ? 'pv.buy_price as buying_price, pv.sale_price as selling_price, pv.wholesale_min, pv.wholesale_price, pv.stock, pv.sold, pv.created_at' : ''} FROM ${TABLE_NAME} pv WHERE pv.product_id = ?`;
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, [productId]); 

    return execResponse<IProductVariation[]>(response, error);
};

export const fetchProductVariationsByProductRef = async (productRef: string, client: Client) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv
INNER JOIN products p ON p.id = pv.product_id
WHERE p.ref = ?`;
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, [productRef]); 

    return execResponse<IProductVariation[]>(response, error);
};

export const fetchProductVariationByProductsArray = async ({ productIds, client } : { productIds: number[], client: Client }) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, productIds); 

    return execResponse<IProductVariation[]>(response, error);
};

export const fetchProductVariationsbyIdArray = async (client:Client, productVariationIds: number[] ) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.id IN (${',?'.repeat(productVariationIds.length).slice(1)})`
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_varaitions", query, null, productVariationIds); 
    return execResponse<IProductVariation[]>(response, error);
};

export const storeProductVariation = async (client: Client, product_variation: IProductVariation) => {
    const query = `INSERT INTO ${TABLE_NAME} (${Object.keys(product_variation as dbInsertRecord).join(",")}) VALUES (${',?'.repeat(Object.keys(product_variation as dbInsertRecord).length).slice(1)})`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, Object.values(product_variation as dbInsertRecord));
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};