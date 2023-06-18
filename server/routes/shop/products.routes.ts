import { Router } from "express";
import * as productsController from "@/controllers/products.controller";
import { slugPolicy } from "@/policies/productCategory.policies";
import { fetchPolicy } from "@/policies/product.policies";

const router = Router();
router.get("/", [ fetchPolicy ], productsController.fetchAllUserProducts);
router.get("/search/:query", [ slugPolicy ], productsController.searchUserProducts);
router.get("/:slug", [ slugPolicy ], productsController.fetchUserProductBySlug);
export default router;