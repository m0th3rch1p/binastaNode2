import { Router } from "express"
import * as ordersController from "@/controllers/distributorUserOrders.controller";
import authMiddleware from "@/middlewares/auth.middleware";
import { isUser } from "@/middlewares/roles.middleware";
import { idPolicy, storePolicy } from "@/policies/order.policies";

const router = Router();
router.get("/", [ authMiddleware, isUser ], ordersController.fetchUserOrders);
router.get("/:id", [ authMiddleware, isUser, idPolicy ], ordersController.fetchUserOrderById);
router.post("/", [ authMiddleware, isUser, storePolicy], ordersController.store );
export default router;