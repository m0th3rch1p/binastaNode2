import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isTenant } from "@/middlewares/roles.middleware";
import * as distributorProductVariationsController from "@/controllers/distributorProductVariations.controller";

const router = Router();
router.get("/", [authMiddleware, isTenant], distributorProductVariationsController.fetchDistributorProductVariations);
router.get("/:slug", [authMiddleware, isTenant], distributorProductVariationsController.fetchDistributorProductVariationsByProductSlug);
export default router;