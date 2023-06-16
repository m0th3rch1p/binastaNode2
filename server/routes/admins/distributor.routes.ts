import { Router } from "express";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";
import * as distributorController from "@/controllers/distributor.controller";

const router = Router();
router.get("/", [authMiddleware, isAdmin], distributorController.index);
router.post("/verify", [authMiddleware, isAdmin], distributorController.verify);
router.put("/:id", [authMiddleware, isAdmin], distributorController.updateById);
router.delete("/:id", [authMiddleware, isAdmin], distributorController.destroyById)
export default router;