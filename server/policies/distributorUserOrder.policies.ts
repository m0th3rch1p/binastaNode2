import { Request, Response, NextFunction } from 'express';
import * as distributorUserOrderValidations from "@/validations/distributorUserOrder.validations";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserOrderValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

// export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
//     const { error, value } = distributorUserOrderValidations.updateSchema.validate({ ...req.params, ...req.body });
//     if (error) {
//         res.status(422).json({
//             errors: error.details
//         });
//     } else next();
// };

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserOrderValidations.idSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};

export const markDeliveredPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserOrderValidations.markDeliveredSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};