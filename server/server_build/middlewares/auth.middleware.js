"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    console.log(req.session);
    if (!req.session.user_id) {
        res.status(401).json({ message: "Unauthenticated" });
    }
    else
        next();
};
