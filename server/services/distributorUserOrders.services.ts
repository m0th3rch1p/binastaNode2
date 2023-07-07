import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorUserOrder } from "@/models/DistributorUserOrder.model";
import { fetchDistributorUserOrderProductVariations, storeDistributorYOrderProductVariations } from "./distributorUserOrderProductVariation.services";
import { fetchProductImagesByProductIdArray } from "./productImages.services";
import _ from 'lodash';


const TABLE_NAME = "distributor_user_orders";

export type Client = "distributor" | "user";

export const fetchDistributorUserOrders = async (client: Client, user_id?: number) => {
    const query = `SELECT duo.ref, duo.created_at,duo.status, duo.amount, duo.created_at 
FROM distributor_user_orders duo
${client === "distributor" ? `INNER JOIN distributor_users du ON du.id = duo.distributor_user_id WHERE du.distributor_id = ?` : ''}
${client === "user" ? " WHERE duo.distributor_user_id" : ""}`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [user_id] : null);

    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const fetchDistributorUserOrderById = async (client: Client, order_id: number, user_id?: number) => {
    const query = `SELECT dua.address, dua.phone_number, duo.ref, duo.status, duo.created_at FROM distributor_user_orders duo 
JOIN distributor_user_addresses dua ON dua.id = duo.distributor_user_address_id
${client === "user" ? 'WHERE duo.id = ?' : ''}`;

    const { response, error } = await execQuery<[IDistributorUserOrder[]][]>(TABLE_NAME, query, null, client === "user" ? [user_id] : null);
    const results = execResponse<IDistributorUserOrder[]>(response, error);
    if (!results || !results.length) return null;
    
    const product_variations = await fetchDistributorUserOrderProductVariations(order_id);
    if (!product_variations) return null;

    return { order: results[0], product_variations };
};

export const fetchDistributorUserOrderByRef = async (client: Client, user_id?:number, order_ref?: string) => {
    const query = `SELECT du.email, duo.id, pv.variation, dua.address, duopv.quantity, dua.phone_number, duo.ref, duo.status, duo.amount, duo.created_at FROM distributor_user_orders duo 
${client === "distributor" ? "JOIN (distributor_user_addresses dua, distributor_users du, distributor_user_order_product_variations duopv, product_variations pv) ON (dua.id = duo.distributor_user_address_id AND du.id = duo.distributor_user_id AND duopv.distributor_user_order_id = duo.id AND duopv.distributor_product_variation_id = pv.id) WHERE du.distributor_id = ? AND " : ""}
${client === "user" ? "WHERE duo.distributor_user_id=? AND " : ""}
duo.ref = ?`;

    const { response, error } = await execQuery<[IDistributorUserOrder[]][]>(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [user_id, order_ref] : [order_ref]);
    const results = execResponse<IDistributorUserOrder[]>(response, error);
    if (!results || !results.length) return null;
    
    const product_variations = await fetchDistributorUserOrderProductVariations(results[0].id);
    if (!product_variations || !product_variations.length) return null;

    const productIds = product_variations.map(variation => variation.product_id)
    const productImages = await fetchProductImagesByProductIdArray(productIds as number[]);
    if (productImages && !productImages.length) return null;

    const groupedImages = _.groupBy(productImages, "product_id");
    const variationsImagesEmbedded = product_variations.map(variation => ({
        ...variation,
        images: groupedImages[variation.product_id as number]
    }))
    return { order: results[0], product_variations: variationsImagesEmbedded };
}

export const storeDistributorUserOrder = async (order: IDistributorUserOrder, productVariations: [number, number][]) => {
    const query = `INSERT INTO distributor_user_orders (distributor_user_id, distributor_user_address_id, ref) VALUES (?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [ order.distributor_user_id, order.distributor_user_address_id, order.ref ]);

    const orderResults = execResponse<{affectedRows: number, insertId: number}>(response, error);
    if (!orderResults || !orderResults.affectedRows) return null;

    const variations: [number, number, number][] = productVariations.map(([product_variation_id, quantity]) => [orderResults.insertId, product_variation_id, quantity]);;
    const distributorUserOrderResults = await storeDistributorYOrderProductVariations(variations);
   
    if (!distributorUserOrderResults) return null;

    return orderResults;
};

export const markDistriutorUserOrderDelivered = async (order_id: number, distributor_id: number) => {
    const query = `UPDATE distributor_user_orders duo INNER JOIN distributor_users du ON du.id = duo.distributor_user_id SET status = 'delivered'
WHERE duo.id = ? AND du.distributor_id = ?`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [order_id, distributor_id]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);   
}