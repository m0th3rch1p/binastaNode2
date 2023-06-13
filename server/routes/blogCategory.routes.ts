import { Router } from "express";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";
import * as blogCategoriesController from "@/controllers/blogCategories.controller";

const router = Router();
router.get("/", blogCategoriesController.index);
router.post("/", [authMiddleware, isAdmin], blogCategoriesController.store);
router.put("/:id", [authMiddleware, isAdmin], blogCategoriesController.updateById);
router.delete("/", [authMiddleware, isAdmin], blogCategoriesController.destroyById);

export default router;