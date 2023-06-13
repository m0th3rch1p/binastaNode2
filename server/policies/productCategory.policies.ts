import { Request, Response, NextFunction } from "express";
import * as productCategoryValidations from "@/validations/productCategory.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = productCategoryValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = productCategoryValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const slugPolicy  = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = productCategoryValidations.fetchBySlug.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};


export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = productCategoryValidations.fetchByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};