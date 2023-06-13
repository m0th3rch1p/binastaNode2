import { Request, Response, NextFunction } from "express";
import * as adminValidations from "@/validations/admin.validations";

export const authPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = adminValidations.authSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else if (!req.body) {
        res.status(500).json({
            message: 'something went wrong'
        })
    } else next();
};
