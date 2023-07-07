import { Router } from 'express';
import * as productCategoriesController from "@/controllers/productCategories.controller";
import { slugPolicy } from '@/policies/productCategory.policies';

const router = Router();

router.get("/", productCategoriesController.index);
router.get("/:slug", [ slugPolicy ], productCategoriesController.fetchBySlug);

export default router;