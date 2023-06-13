import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.role !== "admin") {
        res.status(403).json({ message: "Unauthorized"});
    } else next();
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.role !== "user") {
        res.status(403).json({ message: "Unauthorized"});
    } else next();
};

export const isTenant = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.role !== "distributor") {
        res.status(403).json({ message: "Unauthorized"});
    } else next();
};