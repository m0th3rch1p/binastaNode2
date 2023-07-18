"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_init = void 0;
const redis_database_1 = require("./redis/redis.database");
const mysql_database_1 = require("./mysql/mysql.database");
const logger_1 = __importDefault(require("../helpers/logger"));
const config_1 = __importDefault(require("../config"));
const db_init = () => {
    // Database Initialization
    switch (config_1.default.database.primaryDb) {
        case "mysql":
            (0, mysql_database_1.mysql_db_init)(config_1.default.database.dbDataSources.mysql.default);
            break;
        default:
            logger_1.default.error(`${config_1.default.database.primaryDb} is not yet supported`);
            break;
    }
    // Secondary DB Initialization
    if (config_1.default.database.secondaryDb) {
        switch (config_1.default.database.secondaryDb) {
            case "redis":
                (0, redis_database_1.redis_init)(config_1.default.database.dbDataSources.redis.singleConnection);
                break;
            default:
                logger_1.default.error(`${config_1.default.database.secondaryDb} is not yet supported`);
                break;
        }
    }
};
exports.db_init = db_init;
