import { Router } from "express";
import * as productsController from "@/controllers/products.controller";
import { slugPolicy } from "@/policies/productCategory.policies";

const router = Router();
router.get("/", productsController.fetchAllUserProducts);
router.get("/:slug", [ slugPolicy ], productsController.fetchUserProductBySlug);
export default router;