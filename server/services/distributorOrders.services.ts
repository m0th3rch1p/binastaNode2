import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorOrder } from "@/models/DistributorOrder.model";
import { IDistributorOrderProduct } from "@/models/DistributorOrderProduct.model";

const TABLE_NAME = "distributor_orders";

export type Client = "admin" | "distributor";

export const fetchOrders = async (client: Client, distributor_id?: number) => {
    const { response, error } = client === "admin" ? await execQuery<[IDistributorOrder[]][]>("distributor_orders", "SELECTALL") : await execQuery<[IDistributorOrder[]][]>(TABLE_NAME, `SELECT do.ref, do.status, do.created_at FROM distributor_orders do
INNER JOIN distributor_address da ON da.id = do.distributor_id
WHERE do.distributor_id = ?`, null, [distributor_id]);
    return execResponse<IDistributorOrder[]>(response, error);
};

export const fetchOrderByRef = async (client: Client, ref: string, distributor_id?: number) => {
    const { response, error } = client === "admin" ? await execQuery<[IDistributorOrder[]][]>("distributor_orders", "SELECT", ['ref'], [ref]) : await execQuery<[IDistributorOrder[]][]>(TABLE_NAME, `SELECT do.ref, do.status, do.created_at FROM distributor_orders do
INNER JOIN distributor_address da ON da.id = do.distributor_id
INNER JOIN package_categories pc ON pc.id = dop.package_id
WHERE do.distributor_id = ? AND do.ref=?
LIMIT 1`, null, [distributor_id, ref]);
    return execResponse<IDistributorOrder[]>(response, error);
};

export const fetchOrderById = async (client: Client, id: number, distributor_id?: number) => {
    const { response, error } = client === "admin" ? await execQuery<[IDistributorOrder[]][]>("distributor_orders", "SELECT", ['id'], [id]) : await execQuery<[IDistributorOrder[]][]>(TABLE_NAME, `SELECT do.id, do.ref, do.status, do.created_at FROM distributor_orders do
INNER JOIN distributor_addresses da ON da.id = do.distributor_id
WHERE do.distributor_id = ? AND do.id=?
LIMIT 1`, null, [distributor_id, id]);

    return execResponse<IDistributorOrder[]>(response, error);
};

export const fetchOrderProductVariationsById = async (order_id: number) => {
    const { response, error } = await execQuery<[IDistributorOrderProduct[]][]>(TABLE_NAME, "SELECT product_variation_id FROM distributor_order_product_variations WHERE distributor_order_id = ?", null, [ order_id ]);
    return execResponse<IDistributorOrderProduct[]>(response, error);
};

export const store = async (order: IDistributorOrder, packages: [number, number][], distributor_id: number) => {
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("distributor_orders", "INSERT", ["distributor_id", "distributor_address_id", "ref"], [order.distributor_id, order.distributor_address_id, order.ref]);

    const storeResults = execResponse<{ affectedRows: number, insertId: number }>(response, error);
    if (!storeResults || !storeResults.insertId) return null;
    const orderPackages: [number, number, number, number][] = [] as [number, number, number, number][];

    for (const orderPackage of packages) {
        orderPackages.push([distributor_id, storeResults.insertId, orderPackage[0], orderPackage[1]]);
    }

    const { response: dopvResponse, error: dopvError } = await execQuery<{ affectedRows: number, insertId: number }>("distributor_order_product_variations", "BATCHINSERT", ["distributor_id","distributor_order_id", "product_variation_id", "quantity"], [orderPackages]);
    const dopvResults = execResponse<{ affectedRows: number, insertId: number }>(dopvResponse, dopvError);
    console.log(dopvResults);
    return storeResults;
};