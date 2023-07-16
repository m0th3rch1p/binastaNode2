"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysql_db_execute = exports.mysql_db_init = exports.configuration = exports.connection = void 0;
const promise_1 = require("mysql2/promise");
exports.connection = null;
exports.configuration = null;
const mysql_db_init = (dbConfig) => {
    try {
        console.log(`Intializing Connection to mysql server host: ${dbConfig.host}:${dbConfig.port} using user ${dbConfig.user}`);
        db_connect(dbConfig);
    }
    catch (error) {
        console.log("[database.mysql.index][error]: ", error);
        return null;
    }
    return null;
};
exports.mysql_db_init = mysql_db_init;
const mysql_db_execute = (query, params) => {
    if (exports.connection == null)
        throw new Error("DB has not yet been initialized");
    return exports.connection.query(query, params);
};
exports.mysql_db_execute = mysql_db_execute;
const db_connect = async (dbConfig) => {
    try {
        console.log("Connection type: ", dbConfig.connectionType);
        if (dbConfig.connectionType === "connection") {
            exports.configuration = {
                ...dbConfig
            };
            exports.connection = await (0, promise_1.createConnection)(exports.configuration);
        }
        else if (dbConfig.connectionType === "pool") {
            exports.configuration = {
                ...dbConfig,
                waitForConnections: true
            };
            exports.connection = (0, promise_1.createPool)(exports.configuration);
        }
        else
            throw new Error("Can't find connection type. currently support pool and connection values");
        console.log("[+] Connection to DB Successfull");
        return exports.connection;
    }
    catch (error) {
        console.log("[database.mysql.execute][error]: ", error);
        return null;
    }
};
