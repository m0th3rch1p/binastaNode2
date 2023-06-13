import { Router } from "express";
import { storePolicy } from "@/policies/userAddress.policies";
import { isUser } from "@/middlewares/roles.middleware";
import * as addressesController from "@/controllers/userAddresses.controller";
import authMiddleware from "@/middlewares/auth.middleware";


const router = Router();
router.get("/", [ authMiddleware, isUser], addressesController.fethUserAddresses);
router.post("/", [ authMiddleware, isUser, storePolicy ], addressesController.store);
export default router;