"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execResponse = void 0;
const execResponse = (response, error) => {
    if (error) {
        console.log("[-] error fetching product variations");
        return null;
    }
    return response?.[0];
};
exports.execResponse = execResponse;
