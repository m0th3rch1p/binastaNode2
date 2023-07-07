import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import * as distributorOrdersController from "@/controllers/distributorOrders.controller";

const router = Router();
router.get("/", [authMiddleware, isAdmin], distributorOrdersController.index);
router.get("/:id", [authMiddleware, isAdmin], distributorOrdersController.fetchDistributorOrders);
export default router;