import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorProductVariation } from "@/models/DistributorProductVariation.model";

const TABLE_NAME = "distributor_product_variations";

export type Client = "admin" | "distributor" | "user";

export const fetchDistributorProductVariations = async (client: Client, distributorId: number) => {
    const query = `SELECT pv.variation, pv.id, pv.product_id, p.name as product_name, p.slug as product_slug, pi.path_url as product_image, dpv.product_variation_id, dpv.selling_price ${client === "user" ? 'as buy_price' : ''} ${(client === "admin" || client === "distributor") ? ', dpv.sold, dpv.stock, pv.recomended_price, pv.wholesale_price as buying_price' : ''}
FROM distributor_product_variations dpv
JOIN (product_variations pv, products p, product_images pi) ON (pv.id = dpv.product_variation_id AND p.id = pv.product_id AND pi.product_id = p.id)
WHERE dpv.distributor_id = ?`;
    const { response, error } = await execQuery<[IDistributorProductVariation[]][]>(TABLE_NAME, query, null, [distributorId]);
    return execResponse<IDistributorProductVariation[]>(response, error);
};

export const fetchDistributorProductVariationsByProductById = async (client: Client, distributorId: number, productId: number) => {
    const query = `SELECT p.id, pv.variation ${(client === "admin" || client === "distributor") ? ', dpv.sold, dpv.stock, pv.recomended_price, pv.wholesale_price as buying_price, dpv.selling_price' : ''} FROM distributor_product_variations dpv
JOIN (product_variations pv, products p) ON (pv.id = dpv.product_variation_id AND pv.product_id = p.id)
WHERE p.id = ? AND dpv.distributor_id = ?`;

    const { response, error } = await execQuery<[IDistributorProductVariation[]][]>(TABLE_NAME, query, null, [productId, distributorId]);
    return execResponse<IDistributorProductVariation[]>(response, error);
};