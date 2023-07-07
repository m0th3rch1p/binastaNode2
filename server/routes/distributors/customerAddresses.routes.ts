import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isTenant } from "@/middlewares/roles.middleware";

import * as distributorUserAddressesController from "@/controllers/distributorUserAddresses.controller";

const router = Router();
router.get("/", [ authMiddleware, isTenant ], distributorUserAddressesController.fetchAddresses);
export default router;