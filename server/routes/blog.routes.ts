import { Router } from "express";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";
import * as blogsController from "@/controllers/blogs.controller";

const router = Router();
router.get("/", blogsController.index);
router.post("/", [authMiddleware, isAdmin], blogsController.store);
router.put("/:id", [authMiddleware, isAdmin], blogsController.updateById);
router.delete("/", [authMiddleware, isAdmin], blogsController.destroyById);

export default router;