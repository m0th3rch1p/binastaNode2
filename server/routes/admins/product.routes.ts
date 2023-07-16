import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy, updatePolicy, idPolicy } from "@/policies/product.policies";
import * as productsController from "@/controllers/products.controller";
import { fetchProductVariationsByProductRef, store as storeProductVariation } from "@/controllers/productVariations.controller";

const router = Router();
router.get("/", [ authMiddleware, isAdmin], productsController.index);
router.get("/:id", [ authMiddleware, isAdmin], productsController.fetchProductById);
router.post("/", [ authMiddleware, isAdmin], productsController.store);
router.post("/product_variations", [ authMiddleware, isAdmin], storeProductVariation);
router.put("/:id", [ authMiddleware, isAdmin, updatePolicy ], productsController.updateById);
router.delete("/:id", [ authMiddleware, isAdmin, idPolicy ], productsController.destroyById);
export default router;
