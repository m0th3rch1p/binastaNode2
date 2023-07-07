import { Router } from "express";
import { storePolicy } from "@/policies/userAddress.policies";
import { isUser } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";
import * as addressesController from "@/controllers/distributorUserAddresses.controller";

const router = Router();
router.get("/", [ authMiddleware, isUser], addressesController.fetchUserAddresses);
router.post("/", [ authMiddleware, isUser, storePolicy ], addressesController.store);
export default router;