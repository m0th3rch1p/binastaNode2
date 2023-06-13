import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin, isTenant } from "@/middlewares/roles.middleware";
import * as distributorAddressesController from "@/controllers/distributorAddresses.controller";
import { storePolicy, idPolicy, updatePolicy } from "@/policies/distributorAddress.policies";

const router = Router();
router.get("/", [authMiddleware, isAdmin], distributorAddressesController.index);
router.post("/", [authMiddleware, isTenant, storePolicy], distributorAddressesController.store);
router.put("/:id", [authMiddleware,isTenant, updatePolicy], distributorAddressesController.updateById);
router.delete("/:id", [authMiddleware,isTenant, idPolicy], distributorAddressesController.destroyById);

export default router;