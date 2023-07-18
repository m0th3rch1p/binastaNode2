"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execResponse = void 0;
const logger_1 = __importDefault(require("../helpers/logger"));
const execResponse = (response, error) => {
    if (error) {
        logger_1.default.error("[-] response error", error);
        return null;
    }
    if (!Array.isArray(response)) {
        return response ? response : null;
    }
    return response?.[0];
};
exports.execResponse = execResponse;
