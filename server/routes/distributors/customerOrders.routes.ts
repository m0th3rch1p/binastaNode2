import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isTenant } from "@/middlewares/roles.middleware";

import * as distributorUserOrdersController from "@/controllers/distributorUserOrders.controller";
import * as distributorUserOrdersPolicies from "@/policies/distributorUserOrder.policies"

const router = Router();
router.get("/", [ authMiddleware, isTenant ], distributorUserOrdersController.fetchDistributorUserOrders);
router.get("/:ref", [ authMiddleware, isTenant ], distributorUserOrdersController.fetchDistributorUserOrdersBySlug);
router.post("/mark-delivered", [ authMiddleware, isTenant,  distributorUserOrdersPolicies.markDeliveredPolicy], distributorUserOrdersController.markDelivered);
export default router;