import { Request, Response, NextFunction } from 'express';
import * as packageCategoryValidations from "@/validations/packageCategory.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = packageCategoryValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = packageCategoryValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const slugPolicy  = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = packageCategoryValidations.fetchBySlug.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = packageCategoryValidations.idSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};