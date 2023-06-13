import { Request, Response, NextFunction } from 'express';
import * as distributorUserValidations from "@/validations/distributorUser.validations";

export const registerPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserValidations.registerSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

export const authPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserValidations.authenticateSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};


// export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
//     const { error, value } = distributorUserValidations.updateSchema.validate({ ...req.params, ...req.body });
//     if (error) {
//         res.status(422).json({
//             errors: error.details
//         });
//     } else next();
// };

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserValidations.idSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};