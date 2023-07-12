import { IDistributorProductVariation } from '@/models/DistributorProductVariation.model';
import { execQuery } from '../helpers/queryHelpers';
import { execResponse } from './response.services';

const TABLE_NAME = "distributor_order_product_variations";
export const fetchDistributorOrderProductVariationsByOrderId = async (id: number) => {
    const query = `SELECT quantity, pv.variation, pv.wholesale_min as buy_price, pv.wholesale_min, p.name as product_name, p.slug as product_slug, p.id as product_id FROM ${TABLE_NAME} dopv
INNER JOIN (distributor_orders do, product_variations pv, products p) 
ON (do.id = dopv.distributor_order_id AND pv.id = dopv.product_variation_id AND p.id = pv.product_id)
WHERE dopv.distributor_order_id = ?`;
    const { response, error } = await execQuery<[IDistributorProductVariation[]][]>(TABLE_NAME, query, null, [ id ]);
    return execResponse<IDistributorProductVariation[]>(response, error);
};