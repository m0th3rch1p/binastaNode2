import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import * as blogCategoriesController from "@/controllers/blogCategories.controller";
import { isAdmin } from "@/middlewares/roles.middleware";

const router = Router();
router.get("/", [authMiddleware, isAdmin], blogCategoriesController.index);
router.post("/", [authMiddleware, isAdmin], blogCategoriesController.store);
router.put("/:id", [authMiddleware, isAdmin], blogCategoriesController.updateById);
router.delete("/:id", [authMiddleware, isAdmin], blogCategoriesController.destroyById);
export default router;