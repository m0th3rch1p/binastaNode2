import { Router } from "express";

import * as productsController from "@/controllers/products.controller";

const router = Router();
router.get("/", productsController.fetchDistributorProducts);
router.get("/:slug", productsController.fetchDistributorProductBySlug);
export default router;