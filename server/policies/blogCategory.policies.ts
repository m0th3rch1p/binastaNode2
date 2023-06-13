import { Request, Response, NextFunction } from 'express';
import * as blogCategoryValidations from "@/validations/blogCategory.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = blogCategoryValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = blogCategoryValidations.updateSchema.validate({ ...req.params, ...req.body });
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = blogCategoryValidations.idSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};