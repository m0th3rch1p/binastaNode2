import { IDistributor } from '@/models/Distributor.model';
import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDomain } from '@/models/Domain.model';
import { storeDomain } from './domain.services';
import { fetchDistributorAddresses } from './distributorAddresses.services';

const TABLE_NAME = "distributors";

export const fetchDistributors = async () => {
    const { response , error} = await execQuery<[IDistributor[]][]>(TABLE_NAME, "SELECT id, first_name, last_name, email, store_name, phone_number, gender, reward_points, verified, created_at FROM distributors");
    return execResponse<IDistributor[]>(response, error);
};

export const fetchDistributorById = async (id: number) => {
    const { response , error} = await execQuery<[IDistributor[]][]>(TABLE_NAME, "SELECT id, first_name, last_name, email, store_name, phone_number, gender, reward_points, verified, created_at FROM distributors WHERE id = ?", null, [ id ]);
    return execResponse<IDistributor[]>(response, error);
};

export const fetchDistributorBySlug = async (distributor: IDistributor) => {
    const { response, error } = await execQuery<[IDistributor[]][]>("distributors", "SELELECTBYCOL", ["referal_code"], [distributor.referal_code]);
    return execResponse<IDistributor[]>(response, error);
};

export const registerDistributor = async (distributor: IDistributor) => {
    const { response, error } = await execQuery<{ affectedRows: number, insertId: number }>("distributors", "INSERT", ["country_id", "referal_code", "store_name", "first_name", "last_name", "email", "password", "phone_number", "gender", "parent"], [distributor.country_id, distributor.referal_code, distributor.store_name, distributor.first_name, distributor.last_name, distributor.email, distributor.password, distributor.phone_number, distributor.gender, distributor.parent]);
    return execResponse<{ affectedRows: number, insertId: number }>(response, error);
};

export const authenticateDistributor = async (distributor: IDistributor) => {
    const { response, error } = await execQuery<[IDistributor[]][]>("distributors", "AUTH", null, [distributor.email]);
    return execResponse<IDistributor[]>(response, error);
};

export const verifyDistributor = async (id: number) => {
    const { response, error } = await execQuery<[IDistributor[]][]>(TABLE_NAME, "SELECT id, store_name, parent FROM distributors WHERE id = ?", null, [ id ]);
    const distributor = execResponse<IDistributor[]>(response, error);

    if (!distributor) return null;

    const { response: parentResponse, error: parentError } = await execQuery<[IDistributor[]][]>(TABLE_NAME, "SELECT id FROM distributors d INNER JOIN (SELECT parent, COUNT(id) as child_count FROM distributors GROUP BY parent) ds ON ds.parent = d.id WHERE id = ?", null, [id]);
    const parent = execResponse<IDistributor[]>(parentResponse, parentError);

    if (!parent) return null;
    else if (parent.length) {
        let depth: number = parent[0].child_count as number;
    
        if (depth < 3) {
            if (depth == 0) (parent[0].reward_points as number) += 12;
            else if (depth == 1) (parent[0].reward_points as number) += 4;
            else if (depth == 2) (parent[0].reward_points as number) += 1;
        
            await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "UPDATE distributors SET reward_points=? WHERE id=?", null, [ parent[0].reward_points, parent[0].id ]);
        }
    }
    //Create domain for distributor
    const domain: IDomain = {
        distributor_id: distributor[0].id,
        domain: distributor[0].store_name
    };

    await storeDomain(domain);

    const { response: verificationResponse, error: verificationError } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, "UPDATE distributors set verified = true WHERE id = ?", null, [ distributor[0].id ]);
    return execResponse<{affectedRows: number, insertId: number}>(verificationResponse, verificationError);
};