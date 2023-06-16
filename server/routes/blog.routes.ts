import { Router } from "express";
import * as blogsController from "@/controllers/blogs.controller"

const router = Router();
router.get("/", blogsController.index);
router.get("/:slug", blogsController.fetchBySlug);
export default router;