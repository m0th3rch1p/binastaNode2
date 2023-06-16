import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import * as userAddressesController from "@/controllers/userAddresses.controller";

const router = Router();
router.get('/', [authMiddleware, isAdmin], userAddressesController.index);
export default router;