import { Router } from "express";
import * as packageCategoriesController from "@/controllers/packageCategories.controller";
import { slugPolicy } from "@/policies/packageCategory.policies";

const router = Router();
router.get("/", packageCategoriesController.index);
router.get("/:slug", [ slugPolicy ], packageCategoriesController.fetchBySlug);
export default router;