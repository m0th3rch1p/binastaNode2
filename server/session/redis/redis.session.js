"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisSessionInit = void 0;
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
let redisStore;
const redisSessionInit = (client) => {
    try {
        console.log(`[session.mysql.session][redisSessionInit][DEBUG]: secret: ${process.env.SESSION_SECRET}`);
        redisStore = new connect_redis_1.default({
            client,
            prefix: "mlmapp:"
        });
        if (!redisStore)
            throw new Error("Error initializing redis store");
        return (0, express_session_1.default)({
            store: redisStore,
            resave: false,
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET || "secret",
        });
    }
    catch (error) {
        console.log("[database.session.redis][redisSessionInit][error]: ", error);
        return null;
    }
};
exports.redisSessionInit = redisSessionInit;
