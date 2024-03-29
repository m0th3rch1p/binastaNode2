import { Request, Response, NextFunction } from 'express';
import * as distributorValidations from "@/validations/distributor.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorValidations.registerSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorValidations.fetchByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};