"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.session_init = void 0;
const mysql_database_1 = require("@/database/mysql/mysql.database");
const redis_database_1 = require("@/database/redis/redis.database");
const mysql_session_1 = require("./mysql/mysql.session");
const redis_session_1 = require("./redis/redis.session");
const config_1 = __importDefault(require("@/config"));
const session_init = () => {
    try {
        if (config_1.default.session.sessionType === "database") {
            switch (config_1.default.session.sessionDB) {
                case "mysql":
                    if (!mysql_database_1.connection)
                        throw new Error("Mysql Connection has not yet been initialized");
                    return (0, mysql_session_1.mysqlSessionInit)(mysql_database_1.connection, config_1.default.database.dbDataSources.mysql.default, config_1.default.session.sessionKey);
                case "redis":
                    if (!redis_database_1.client)
                        throw new Error("Redis Connection has not yet been initialized");
                    return (0, redis_session_1.redisSessionInit)(redis_database_1.client);
                default:
                    throw new Error(`${config_1.default.session.sessionDB} is not yet supported`);
            }
        }
    }
    catch (error) {
        console.log("[session.index][init][error]: ", error);
        return null;
    }
};
exports.session_init = session_init;
