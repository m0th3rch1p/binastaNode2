import { Router } from "express";

import * as productsController from "@/controllers/products.controller";

const router = Router();
router.get("/", productsController.index);
router.get("/:slug", productsController.fetchUserProductBySlug);

export default router;