import * as emailValidations from "@/validations/email.validations";
import { NextFunction, Request, Response } from "express";

export const emailPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = emailValidations.emailSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
        return;
    }

    next();
}