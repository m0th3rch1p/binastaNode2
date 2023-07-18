import { MysqlConfig } from '@/types/mysqlConn.types';
import { ConnectionOptions, PoolOptions, Connection, Pool, createConnection, createPool } from "mysql2/promise";
import logger from "@/helpers/logger";

export let connection: Connection | Pool | null = null;
export let configuration: ConnectionOptions | PoolOptions | null = null;

export const mysql_db_init = (dbConfig: MysqlConfig): Connection | Pool | null => {
    try {   
        logger.info(`Intializing Connection to mysql server host: ${dbConfig.host}:${dbConfig.port} using user ${dbConfig.user}`);
        db_connect(dbConfig);
    } catch (error) {
        logger.error("[database.mysql.index][error]: ", error);
        return null;
    }
    return null;
};

export const mysql_db_execute = <T> (query: string, params: any[])  => { 
    if (connection == null) throw new Error("DB has not yet been initialized");    
    return <T> connection.query(query, params);
};

const db_connect = async (dbConfig: MysqlConfig) : Promise<Connection | Pool | null> => {
    try {
        logger.info("Connection type: ", dbConfig.connectionType);
        if (dbConfig.connectionType === "connection") {
            configuration = <ConnectionOptions>{
               ...dbConfig
            };
            connection = await createConnection(configuration);
        } else if (dbConfig.connectionType === "pool") {
            configuration = <PoolOptions> {
                ...dbConfig,
                waitForConnections: true
            }
            connection = createPool(configuration);
        } else throw new Error("Can't find connection type. currently support pool and connection values");

        logger.info("[+] Connection to DB Successfull");
        return connection;
    } catch (error) {
        logger.error("[database.mysql.execute][error]: ", error);
        return null;
    }
}