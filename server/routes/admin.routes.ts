import { Router } from "express";
import * as adminControllers from "@/controllers/admins.controller";
import { isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy, updatePolicy } from "@/policies/userAddress.policies";
import { authPolicy } from "@/policies/auth.policies";

const router = Router();

router.post('/auth/login', [ authPolicy ], adminControllers.authenticate);

export default router;
