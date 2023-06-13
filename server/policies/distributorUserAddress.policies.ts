import { Request, Response, NextFunction } from 'express';
import * as distributorUserAddressValidations from "@/validations/distributorUserAddress.validation";

export const storePolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserAddressValidations.storeSchema.validate(req.body);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();
};

// export const updatePolicy = (req: Request, res: Response, next: NextFunction) => {
//     const { error, value } = distributorUserAddressValidations.updateSchema.validate({ ...req.params, ...req.body });
//     if (error) {
//         res.status(422).json({
//             errors: error.details
//         });
//     } else next();
// };

export const idPolicy = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = distributorUserAddressValidations.fetchByIdSchema.validate(req.params);
    if (error) {
        res.status(422).json({
            errors: error.details
        });
    } else next();   
};