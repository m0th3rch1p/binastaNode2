import { execQuery } from "@/helpers/queryHelpers";
import { IProductVariation } from "@/models/ProductVariation.model";
import { execResponse } from "./response.services";

export type Client = "admin" | "distributor" | "user" | "shop";

export const fetchProductVariationsByProductId = async ({productId, client}:  {productId: number, client: Client}) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? '(pv.wholesale_price * pv.wholesale_min) as buy_price, pv.wholesale_min, pv.recomended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id = ?`;
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, [productId]); 

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