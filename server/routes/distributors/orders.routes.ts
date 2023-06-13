import { Router } from "express";
import { isTenant } from "@/middlewares/roles.middleware";

import { fetchDistributorOrders, fetchDistributorOrderByRef } from "@/controllers/distributorOrders.controller";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();
router.get("/", [authMiddleware, isTenant], fetchDistributorOrders);
router.get("/:id", [authMiddleware, isTenant], fetchDistributorOrderByRef);
export default router;