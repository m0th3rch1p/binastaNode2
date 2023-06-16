import { mysql_db_execute } from "@/database/mysql/mysql.database";

type Query = string | null;

export type CommonQueries = "SELECT" | "SELECTALL" | "SELECTBYID" | "INSERT" | "BATCHINSERT" | "UPDATEBYID" | "DELETEBYID" | "AUTH" | "SELECTBYCOL";

type QueryStr = Record<CommonQueries, string>;

type QueryStrBuilder = (table: string, tableKeys?: string[] | null) => QueryStr;

type ExecQueryFn<T = unknown> = (table: string, query: CommonQueries | Query, tableKeys?: string[] | null, params?: any[] | null) => T | Promise<T>;

type ExecQueryReturn<TData, TError = unknown> = Promise<{
    response: TData | null,
    error: TError | unknown
}>;

const COMMON_QUERY_STRINGS: QueryStrBuilder = (table: string, tableKeys: string[] | null = null) : QueryStr => {
    return {
        "SELECT": `SELECT ${tableKeys?.join(",")} FROM ${table}`,
        "SELECTALL": `SELECT * FROM ${table}`,
        "SELECTBYID": `SELECT * FROM ${table} WHERE id = ? LIMIT 1`,
        "SELECTBYCOL": `SELECT * FROM ${table} ${tableKeys?.map((key: string) => `WHERE ${key}=?`)}`,
        "INSERT": `INSERT INTO ${table}(${tableKeys}) VALUES (${',?'.repeat(tableKeys ? tableKeys.length : 1).slice(1)})`,
        "BATCHINSERT": `INSERT INTO ${table} VALUES ?`,
        "AUTH": `SELECT id, password FROM ${table} WHERE email = ? LIMIT 1`,
        "UPDATEBYID": `UPDATE ${table} SET ${
            tableKeys?.map((key: string) => `${key}=?`).join(",")
        } WHERE id = ?`,
        "DELETEBYID": `DELETE FROM ${table} WHERE id = ?`,
    };
};

export const execQuery = async <TData = unknown, TError = unknown>(table: string, query: CommonQueries | Query, tableKeys: string[] | null = null, params: any[] | null = null) : ExecQueryReturn<TData, TError> => {
    try {
        let queryStr: Query | null = null;
        switch (query) {
            case "SELECT":
                queryStr = COMMON_QUERY_STRINGS(table, tableKeys).SELECT;
                break;
            case "SELECTALL":
                queryStr = COMMON_QUERY_STRINGS(table).SELECTALL;
                break;
            case "SELECTBYID":
                queryStr = COMMON_QUERY_STRINGS(table).SELECTBYID;
                break;
            case "INSERT":
                queryStr = COMMON_QUERY_STRINGS(table, tableKeys).INSERT;
                break;
            case "BATCHINSERT":
                queryStr = COMMON_QUERY_STRINGS(table).BATCHINSERT;
                break;
            case "AUTH":
                queryStr = COMMON_QUERY_STRINGS(table).AUTH;
                break;
            case "UPDATEBYID":
                queryStr = COMMON_QUERY_STRINGS(table, tableKeys).UPDATEBYID;
                break;
            case "DELETEBYID":
                queryStr = COMMON_QUERY_STRINGS(table).DELETEBYID;
                break;
            default:
                queryStr = query;
                break;
        }

        const response = await mysql_db_execute<TData>(<string>queryStr, <any[]>params);
        return  {
            response,
            error: null
        };
    } catch (error) {
        return {
            response: null,
            error
        };
    }
};