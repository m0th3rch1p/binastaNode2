import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import * as distributorAddressesController from "@/controllers/distributorAddresses.controller";

const router = Router();
router.get("/", [authMiddleware, isAdmin], distributorAddressesController.index);

export default router;