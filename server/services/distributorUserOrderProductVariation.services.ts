import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorUserOrderProductVariation } from "@/models/DistributorUserOrderProductVariation.model";

const TABLE_NAME = "distributor_user_order_product_variations";

export const fetchDistributorUserOrderProductVariations = async (order_id?: number) => {
    const query = `SELECT pv.variation, p.name as product_name, pv.product_id, pv.id as variation_id, dopv.quantity, dpv.selling_price as buy_price FROM ${TABLE_NAME} dopv 
JOIN product_variations pv on pv.id = dopv.distributor_product_variation_id
JOIN distributor_product_variations dpv ON dpv.product_variation_id = dopv.distributor_product_variation_id
JOIN products p ON p.id = pv.product_id
WHERE dopv.distributor_user_order_id = ?`;
    const { response, error } = await execQuery<[IDistributorUserOrderProductVariation[]][]>(TABLE_NAME, query, null, [ order_id ]);
    return execResponse<IDistributorUserOrderProductVariation[]>(response, error);
};

export const storeDistributorYOrderProductVariations = async (orderProductVariations: [number, number, number][]) => {
    const query = `INSERT INTO ${TABLE_NAME} (distributor_user_order_id, distributor_product_variation_id, quantity) VALUES ?`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [orderProductVariations]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};