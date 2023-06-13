import { Request, Response, NextFunction } from "express";
import * as userAddressValidations from "@/validations/userAddress.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userAddressValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userAddressValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userAddressValidations.findByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};