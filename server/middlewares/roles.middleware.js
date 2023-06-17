"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTenant = exports.isUser = exports.isAdmin = void 0;
const isAdmin = (req, res, next) => {
    if (req.session.role !== "admin") {
        res.status(403).json({ message: "Unauthorized" });
    }
    else
        next();
};
exports.isAdmin = isAdmin;
const isUser = (req, res, next) => {
    if (req.session.role !== "user") {
        res.status(403).json({ message: "Unauthorized" });
    }
    else
        next();
};
exports.isUser = isUser;
const isTenant = (req, res, next) => {
    if (req.session.role !== "distributor") {
        res.status(403).json({ message: "Unauthorized" });
    }
    else
        next();
};
exports.isTenant = isTenant;
