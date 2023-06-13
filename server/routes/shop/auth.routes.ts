import { Router } from "express";
import { authPolicy } from "@/policies/auth.policies";
import * as usersController from "@/controllers/users.controller";

const router = Router();
router.post("/login", [ authPolicy ], usersController.authenticate);
router.post("/register", [ authPolicy ], usersController.store);
export default router;