import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { store } from "@/services/distributorAddresses.services";
import { fetchByIdSchema } from "@/validations/order.validations";
import * as distributorAddressesController from "@/controllers/distributorAddresses.controller";
import { isTenant } from "@/middlewares/roles.middleware";

const router = Router();
router.get("/", [authMiddleware, isTenant], distributorAddressesController.fetchDistributorAddresses);
router.post("/", [authMiddleware, isTenant], distributorAddressesController.store);
export default router;