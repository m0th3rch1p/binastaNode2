import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorUserAddress } from "@/models/DistributorUserAddress.model";

const TABLE_NAME = "distributor_user_addresses";

export type Client = "distributor" | "user" | "admin";

export const fetchDistributorUserAddresses = async (client: Client, user_id?: number) => {
    const query = `SELECT ${client === "distributor" ? "du.email, " : ""}distributor_user_id, address, phone_number FROM distributor_user_addresses dua
    ${client === "distributor" ? ` INNER JOIN distributor_users du ON du.id = dua.distributor_user_id` : ``}
    ${client === "user" ? ' WHERE distributor_user_id=' + user_id : ''}`
    const { response, error } = await execQuery<[IDistributorUserAddress[]][]>(TABLE_NAME, query, null, client === "user" || client === "distributor" ? [ user_id ] : null);
    return execResponse<[IDistributorUserAddress[]][]>(response, error);
};

export const storeDistributorUserAddress = async (address: IDistributorUserAddress) => {
    const query = `INSERT INTO distributor_user_addresses (distributor_user_id, address, phone_number) VALUES (?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [ address.distributor_user_id, address.address, address.phone_number ]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};