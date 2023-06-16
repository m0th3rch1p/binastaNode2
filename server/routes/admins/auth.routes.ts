import { Router } from "express";
import { authPolicy } from "@/policies/auth.policies";
import { authenticate } from "@/controllers/admins.controller";

const router = Router();
router.post("/login", [ authPolicy ], authenticate);
export default router;