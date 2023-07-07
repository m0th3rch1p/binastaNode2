import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDomain } from "@/models/Domain.model";

const TABLE_NAME = "domains";

export const fetchDomains = async (domain: IDomain) => {
    const { response, error } = await execQuery<[IDomain[]][]>(TABLE_NAME, "SELECTALL");
    return execResponse<IDomain[]>(response, error);
};

export const storeDomain = async (domain: IDomain) => {
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "INSERT INTO domains (distributor_id, domain) VALUES (?, ?)", null, [ domain.distributor_id, domain.domain ]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const fetchDomainByName = async (domain: string) => {
    const { response, error } = await execQuery<[IDomain[]][]>(TABLE_NAME, "SELECT distributor_id, domain FROM domains WHERE domain = ? LIMIT 1", null, [ domain ]);
    return execResponse<IDomain[]>(response, error);
}