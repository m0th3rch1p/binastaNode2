"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDomain = void 0;
const domain_services_1 = require("../services/domain.services");
const verifyDomain = async (req, res, next) => {
    const domain = await (0, domain_services_1.fetchDomainByName)(req.subdomains[0]);
    if (!domain || !domain.length) {
        res.status(404).json({ message: "Shop not found" });
        return;
    }
    req.session.tenant_id = domain[0].distributor_id;
    next();
};
exports.verifyDomain = verifyDomain;
