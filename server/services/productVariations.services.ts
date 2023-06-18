import { execQuery } from "@/helpers/queryHelpers";
import { IProductVariation } from "@/models/ProductVariation.model";
import { execResponse } from "./response.services";

type Client = "admin" | "distributor" | "user";

export const fetchProductVariationsByProductId = async ({productId, client}:  {productId: number, client: Client}) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? 'pv.wholsale_price, pv.recommended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id = ?)`;
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, [productId]); 

    return execResponse<IProductVariation[]>(response, error);
};

export const fetchProductVariationByProductsArray = async ({ productIds, client } : { productIds: number[], client: Client }) => {
    const query = `SELECT pv.id, pv.product_id, pv.variation, ${client === 'user' ? 'pv.buy_price' : client === 'distributor' ? 'pv.wholsale_price, pv.recommended_price' : client === 'admin' ? 'pv.buy_price, pv.wholesale_price, pv.stock, pv.sold' : ''} FROM product_variations pv WHERE pv.product_id IN (${',?'.repeat(productIds.length).slice(1)})`
    const { response, error } = await execQuery<[IProductVariation[]][]>("product_variations", query, null, productIds); 

    return execResponse<IProductVariation[]>(response, error);
};