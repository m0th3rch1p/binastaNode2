"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = exports.redis_init = exports.client = void 0;
const redis_1 = require("redis");
exports.client = null;
const redis_init = (dbConfig) => {
    try {
        db_connect(dbConfig);
        console.log("Redis DB Initialized successfully");
    }
    catch (error) {
        console.log("Error initializing redis databasae");
        console.log("[database.redis.index][init][error]: ", error);
    }
};
exports.redis_init = redis_init;
const get = async (key) => {
    try {
        if (exports.client === null)
            throw new Error("Redis has not yet been initialized");
        return await exports.client.get(key);
    }
    catch (error) {
        console.log("[database.redis.index][init][get]: ", error);
    }
};
exports.get = get;
const set = (key, val) => {
    try {
        if (exports.client === null)
            throw new Error("Redis has not yet been initialized");
        exports.client.set(key, val);
        return true;
    }
    catch (error) {
        console.log("[database.redis.index][init][set]: ", error);
        return false;
    }
};
exports.set = set;
const db_connect = async (dbConfig) => {
    try {
        const url = `redis://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}`;
        exports.client = (0, redis_1.createClient)({ url });
        exports.client.on("error", (err) => { throw new Error(err); });
        await exports.client.connect();
    }
    catch (error) {
        console.log("[database.redis.index][db_connect][error]: ", error);
    }
};
const db_disconnect = async () => {
    try {
        if (exports.client == null)
            throw new Error("Redis client has not been initialized. Please initialize the db first before trying to destroy it");
        await exports.client.disconnect();
        console.log("[+] redis client disconnected successfully");
    }
    catch (error) {
        console.log("[dabtase.redis.index][db_disconnect][error]: ", error);
    }
};
