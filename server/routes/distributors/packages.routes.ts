import { Router } from "express";
import * as packagesController from "@/controllers/packageCategories.controller"
import { slugPolicy } from "@/policies/packageCategory.policies";

const router = Router();
router.get("/", packagesController.index);
router.get("/:slug", [ slugPolicy ], packagesController.fetchBySlug);
export default router;