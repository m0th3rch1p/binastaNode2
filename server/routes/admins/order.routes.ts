import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isUser, isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy } from "@/policies/order.policies";
import * as ordersController from "@/controllers/orders.controller";

const router = Router();
router.get("/", [ authMiddleware, isAdmin ], ordersController.index);
router.get("/:id", [ authMiddleware, isAdmin ], ordersController.fetchById);
router.post("/", [authMiddleware, isUser, storePolicy], ordersController.store);
export default router;