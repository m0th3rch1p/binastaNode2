import { execQuery } from "@/helpers/queryHelpers";
import { IProductImage } from "@/models/ProductImage.model";
import { execResponse } from "./response.services";

const TABLE_NAME = "product_images";
export const fetchProductImagesByProductIdArray =  async (productIds: number[]) => {
    const query = `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id IN (${',?'.repeat(productIds.length).slice(1)})`;
    const { response, error } = await execQuery<[IProductImage[]][]>(TABLE_NAME, query, null, productIds); 

    return execResponse<IProductImage[]>(response, error);
};

export const fetchProductImagesByProductId =  async (productId: number) => {
    const query = `SELECT pi.product_id, pi.path_url as url, pi.ext FROM product_images pi WHERE pi.product_id = ?`;
    const { response, error } = await execQuery<[IProductImage[]][]>(TABLE_NAME, query, null, [ productId ]); 

    return execResponse<IProductImage[]>(response, error);
};
