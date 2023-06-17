"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlDestroySession = exports.mysqlSessionInit = void 0;
const express_session_1 = __importDefault(require("express-session"));
const express_mysql_session_1 = __importDefault(require("express-mysql-session"));
let sessionStore;
const mysqlSessionInit = (conn, dbConfig, secret) => {
    try {
        sessionStore = new ((0, express_mysql_session_1.default)(express_session_1.default))(dbConfig, conn);
        const sessionOptions = {
            secret: secret,
            store: sessionStore,
            resave: false,
            saveUninitialized: false
        };
        return (0, express_session_1.default)(sessionOptions);
    }
    catch (error) {
        console.log("[session.mysql.session][error]: ", error);
        return null;
    }
};
exports.mysqlSessionInit = mysqlSessionInit;
const mysqlDestroySession = () => {
    sessionStore.close();
};
exports.mysqlDestroySession = mysqlDestroySession;
