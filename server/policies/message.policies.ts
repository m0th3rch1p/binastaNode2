import { Request, Response, NextFunction } from 'express';
import * as messageValidations from "@/validations/messages.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = messageValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = messageValidations.fetchByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};