"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
class AuthenticationError extends Error {
    constructor() {
        super();
        this.name = "Authentication Error";
        this.message = "Invalid Email / Password. Please try again";
    }
}
exports.AuthenticationError = AuthenticationError;
;
