import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    console.log(req.session);
    if (!req.session.user_id) {
        res.status(401).json({ message: "Unauthenticated" });
    } else next();
};