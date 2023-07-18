import { redis_init } from './redis/redis.database';
import { mysql_db_init } from "./mysql/mysql.database";
import logger from "@/helpers/logger";

import config from "../config"

export const db_init =  () => {
    // Database Initialization
    switch (config.database.primaryDb) {
        case "mysql":
            mysql_db_init(config.database.dbDataSources.mysql.default);
            break;
        default:
            logger.error(`${config.database.primaryDb} is not yet supported`);
            break;
    }
    
    // Secondary DB Initialization
    if (config.database.secondaryDb) {
        switch (config.database.secondaryDb) {
            case "redis":
                redis_init(config.database.dbDataSources.redis.singleConnection);
                break;
            default:
                logger.error(`${config.database.secondaryDb} is not yet supported`);
                break;
        }
    }
};