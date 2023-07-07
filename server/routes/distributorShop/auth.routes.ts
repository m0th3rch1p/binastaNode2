import { Router } from "express";
import { authenticate, register } from "@/controllers/distributorUsers.controller";
import { authPolicy } from "@/policies/auth.policies";
import { verifyDomain } from "@/middlewares/domains.middleware";

const router = Router();
router.post("/login", [ verifyDomain, authPolicy ], authenticate);
router.post("/register", [ verifyDomain, authPolicy ], register);
export default router;