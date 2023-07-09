import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IShopSubscriber } from "@/models/ShopSubscriber.model";

const TABLE_NAME = "shop_subscribers";
export const storeSubscriber = async (subscriber: IShopSubscriber) => {
    const query = `INSERT INTO ${TABLE_NAME}(email) VALUES (?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [subscriber.email]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const fetchSubscribers = async () => {
    const query = `SELECT email, created_at FROM ${TABLE_NAME}`;
    const { response, error } = await execQuery<[IShopSubscriber[]][]>(TABLE_NAME, query);
    return execResponse<IShopSubscriber[]>(response, error);
};