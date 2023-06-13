import { Router } from "express";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";
import * as countriesController from "@/controllers/countries.controller";

const router = Router();
router.get("/", countriesController.index);
router.post("/", [authMiddleware, isAdmin], countriesController.store);
router.put("/:id", [authMiddleware, isAdmin], countriesController.updateById);
router.delete("/", [authMiddleware, isAdmin], countriesController.destroyById);

export default router;