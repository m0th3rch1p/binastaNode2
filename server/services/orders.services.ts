import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IOrder } from "@/models/Order.model";
import { Client } from "@/types/common.types";
import { IOrderProductVariation } from "@/models/OrderProductVariation.model";

const TABLE_NAME = "orders";
export const fetchAll = async (client: Client, userId?: number) => {
    const query = `SELECT o.id, o.user_id, o.status, o.amount, o.created_at, u.email, ua.address FROM ${TABLE_NAME} o
INNER JOIN users u ON u.id = o.user_id
INNER JOIN user_addresses ua ON ua.id = o.user_address_id
${client === "user" ? `WHERE o.user_id = ?` : ""}`;

    const { response, error } = await execQuery<[IOrder[]][]>(TABLE_NAME, query, null, client === "user" ? [ userId ] : null);
    return execResponse<IOrder[]>(response, error); 
};

export const fetchById = async (client: Client, id: number, userId?: number) => {
    const query = `SELECT o.id, o.user_id, o.status, o.amount, o.created_at, u.email, u.address FROM ${TABLE_NAME} o
INNER JOIN (users u, user_addresses ua) ON (u.id = o.user_id AND ua.id = o.user_address_id)
WHERE id = ?${client === "user" ? " AND WHERE user_id = ?" : ""}`;

    const { response, error } = await execQuery<[IOrder[]][]>(TABLE_NAME, query, null, client === "user" ? [id, userId] : [id]);
    return execResponse<IOrder[]>(response, error);
};

export const store = async (order: IOrder) => {
    const query = `INSERT INTO orders (user_id, user_address_id, ref, status, amount) VALUES (?, ?, ?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [order.user_id, order.user_address_id, order.ref, order.status]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const fetchOrderProductVariations = async (order_id: number) => {
    const query = `SELECT pv.variation, pv.buy_price, opv.quantity FROM orders o
INNER JOIN (order_product_variations opv, product_variations pv) ON (opv.order_id = o.id AND opv.product_variation_id = pv.id)
WHERE o.id = ?`;

    const { response, error } = await execQuery<[IOrderProductVariation]>(TABLE_NAME, query, null, [order_id]); 
};
