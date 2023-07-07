import { Router } from "express";
import { storePolicy } from "@/policies/distributor.policies";
import { store, authenticate } from "@/controllers/distributor.controller";
import { authPolicy } from "@/policies/auth.policies";

const router = Router();
router.post("/register", [ storePolicy ], store);
router.post("/login", [ authPolicy ], authenticate);

export default router;