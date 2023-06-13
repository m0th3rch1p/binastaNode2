import { Router } from "express";
import * as usersController from "@/controllers/users.controller";
import { isAdmin } from "@/middlewares/roles.middleware";
import { authPolicy } from "@/policies/auth.policies";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();

router.get("/", [ authMiddleware, isAdmin ], usersController.index);
router.post("/auth/register", [ authPolicy ], usersController.store);
router.post("/auth/login", [ authPolicy ], usersController.authenticate);

export default router;