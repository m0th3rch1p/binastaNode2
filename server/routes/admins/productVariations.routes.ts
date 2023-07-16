import { Router } from "express";
import * as productVariationsController from "@/controllers/productVariations.controller";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();
router.post("/", [ authMiddleware, isAdmin ], productVariationsController.store);
export default router;