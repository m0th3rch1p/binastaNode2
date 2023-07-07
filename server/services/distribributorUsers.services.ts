import bcrypt from 'bcrypt';
import { execQuery } from "@/helpers/queryHelpers";
import { execResponse } from "./response.services";
import { IDistributorUser } from '@/models/DistributorUser.model';
import { Client } from '@/types/common.types';

const TABLE_NAME = "distributor_users";

export type IDistributorStats = {
    registered_at: number,
    total_users: number
};

export const fetchDistributorUsers = async (client: Client, distributorId?: number) => {
    const query = `SELECT email, created_at FROM ${TABLE_NAME}${client === "distributor" ? ' WHERE distributor_id = ?' : ''}`;
    const { response, error } = await execQuery<[IDistributorUser[]][]>(TABLE_NAME, query, null , client === "distributor" ? [distributorId] : null);
    return execResponse<IDistributorUser[]>(response, error);
};

export const fetchDistributorUsersStat = async (client:Client, distributorId?:number) => {
    const query = `SELECT MONTH(created_at) as registered_at, SUM(id) as total_users FROM ${TABLE_NAME} ${client === "distributor" ? 'WHERE distributor_id = ? GROUP BY registered_at' : ''}`;
    const { response, error } = await execQuery<[IDistributorStats[]][]>(TABLE_NAME, query, null, client === "distributor" ? [ distributorId ] : null);
    return execResponse<IDistributorStats[]>(response, error);
};

export const registerDistributorUser = async (args : IDistributorUser) => {
    args.password = await bcrypt.hash(args.password as string, 10);

    const query = `INSERT INTO ${TABLE_NAME} (email, password, distributor_id) VALUES (?, ?, ?)`;
    const { response, error } = await execQuery<{affectedRows: number, insertId: number}>(TABLE_NAME, query, null, [  args.email, args.password, args.distributor_id]);
    return execResponse<{affectedRows: number, insertId: number}>(response, error);
};

export const authenticateDistributorUser = async (args : IDistributorUser) => {
    const query = `SELECT id, email, password FROM ${TABLE_NAME} WHERE email=? AND distributor_id=? LIMIT 1`;
    const { response, error } = await execQuery<[IDistributorUser[]][]>(TABLE_NAME, query, null, [ args.email, args.distributor_id ]);
    const results = execResponse<IDistributorUser[]>(response, error);

    if (!results || !results.length) return null

    const pwdMatch = await bcrypt.compare(args.password as string, results[0].password as string);
    if (!pwdMatch) return null
    
    return results;
};

