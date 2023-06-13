import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy, updatePolicy, idPolicy } from "@/policies/product.policies";
import * as productsController from "@/controllers/products.controller";

const router = Router();
router.get("/", productsController.index);
router.post("/", [ authMiddleware, isAdmin, storePolicy ], productsController.store);
router.put("/:id", [ authMiddleware, isAdmin, updatePolicy ], productsController.updateById);
router.delete("/:id", [ authMiddleware, isAdmin, idPolicy ], productsController.destroyById);
export default router;
