"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execResponse = void 0;
const execResponse = (response, error) => {
    if (error) {
        console.log("[-] response error", error);
        return null;
    }
    if (!Array.isArray(response)) {
        return response ? response : null;
    }
    return response?.[0];
};
exports.execResponse = execResponse;
