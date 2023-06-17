"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execQuery = void 0;
const mysql_database_1 = require("@/database/mysql/mysql.database");
const COMMON_QUERY_STRINGS = (table, tableKeys = null) => {
    return {
        "SELECT": `SELECT ${tableKeys?.join(",")} FROM ${table}`,
        "SELECTALL": `SELECT * FROM ${table}`,
        "SELECTBYID": `SELECT * FROM ${table} WHERE id = ? LIMIT 1`,
        "SELECTBYCOL": `SELECT * FROM ${table} ${tableKeys?.map((key) => `WHERE ${key}=?`)}`,
        "INSERT": `INSERT INTO ${table}(${tableKeys}) VALUES (${',?'.repeat(tableKeys ? tableKeys.length : 1).slice(1)})`,
        "BATCHINSERT": `INSERT INTO ${table}(${tableKeys}) VALUES ?`,
        "AUTH": `SELECT id, password FROM ${table} WHERE email = ? LIMIT 1`,
        "UPDATEBYID": `UPDATE ${table} SET ${tableKeys?.map((key) => `${key}=?`).join(",")} WHERE id = ?`,
        "DELETEBYID": `DELETE FROM ${table} WHERE id = ?`,
    };
};
const execQuery = async (table, query, tableKeys = null, params = null) => {
    try {
        let queryStr = null;
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
                queryStr = COMMON_QUERY_STRINGS(table, tableKeys).BATCHINSERT;
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
        const response = await (0, mysql_database_1.mysql_db_execute)(queryStr, params);
        return {
            response,
            error: null
        };
    }
    catch (error) {
        return {
            response: null,
            error
        };
    }
};
exports.execQuery = execQuery;
