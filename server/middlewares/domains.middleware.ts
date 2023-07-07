import { NextFunction, Request, Response } from "express";

import { fetchDomainByName } from "@/services/domain.services";

export const verifyDomain = async (req: Request, res: Response, next: NextFunction) => {
    const domain = await fetchDomainByName(req.subdomains[0]);
    if (!domain || !domain.length) {
        res.status(404).json({ message: "Shop not found" });
        return;
    }
    req.session.tenant_id = domain[0].distributor_id;
    next();
};