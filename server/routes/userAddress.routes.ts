import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isUser, isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy } from "@/policies/userAddress.policies";
import * as userAddressesController from "@/controllers/userAddresses.controller";

const router = Router();
router.get('/', [authMiddleware, isAdmin], userAddressesController.index);
router.post('/', [authMiddleware, isUser, storePolicy], userAddressesController.store);
export default router;;