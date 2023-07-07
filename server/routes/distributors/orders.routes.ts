import { Router } from "express";
import { isTenant } from "@/middlewares/roles.middleware";

import { fetchDistributorOrders, fetchDistributorOrderByRef, fetchDistributorOrderById, store } from "@/controllers/distributorOrders.controller";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();
router.get("/", [authMiddleware, isTenant], fetchDistributorOrders);
router.get("/:id", [authMiddleware, isTenant], fetchDistributorOrderById);
router.get("/:ref", [authMiddleware, isTenant], fetchDistributorOrderByRef);
router.post("/", [authMiddleware, isTenant], store);
export default router;