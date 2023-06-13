import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin, isTenant } from "@/middlewares/roles.middleware";
import * as distributorOrdersController from "@/controllers/distributorOrders.controller";

const router = Router();
router.get("/", [authMiddleware, isAdmin], distributorOrdersController.index);
router.post("/", [authMiddleware, isTenant], distributorOrdersController.store);
router.put("/:id", [authMiddleware,isTenant], distributorOrdersController.updateById);
router.delete("/:id", [authMiddleware,isTenant], distributorOrdersController.destroyById);

export default router;