import { Router } from "express";
import * as usersController from "@/controllers/users.controller";
import { isAdmin } from "@/middlewares/roles.middleware";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();

router.get("/", [ authMiddleware, isAdmin ], usersController.index);
export default router;