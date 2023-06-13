import { Request, Response, NextFunction } from "express";
import * as userValidations from "@/validations/user.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userValidations.authSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};
