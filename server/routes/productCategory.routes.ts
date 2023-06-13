import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isAdmin } from "@/middlewares/roles.middleware";
import { storePolicy, updatePolicy, idPolicy } from "@/policies/productCategory.policies";
import * as productCategoryControllers from "@/controllers/productCategories.controller";

const router = Router();
router.get("/", productCategoryControllers.index);
router.post("/", [authMiddleware, isAdmin, storePolicy], productCategoryControllers.store);
router.put("/:id", [authMiddleware, isAdmin, updatePolicy], productCategoryControllers.updateById);
router.delete("/:id", [authMiddleware, isAdmin, idPolicy], productCategoryControllers.destroyById);
export default router;