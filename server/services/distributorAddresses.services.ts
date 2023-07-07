import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorAddress } from "@/models/DistributorAddress.model";

export type Client = "admin" | "distributor";

export const fetchDistributorAddresses = async (client: Client, distributor_id?: number) => {
    const { response, error} = client ? await execQuery<[IDistributorAddress[]][]>("distributor_addresses", "SELECTALL") : await execQuery<[IDistributorAddress[]][]>("distributor_addresses", "SELECT id, address, phone_number FROM distributor_addresses WHERE distributor_id =?", null, [distributor_id]);
    return execResponse<IDistributorAddress[]>(response, error);   
};

export const store = async (address: IDistributorAddress) => {
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("distributor_addresses", "INSERT", ["distributor_id", "address", "phone_number"], [address.distributor_id, address.address, address.phone_number]);
    return execResponse<{ affectedRows: number, insertId: number }>(response, error);
};