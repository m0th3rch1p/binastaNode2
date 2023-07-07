import { Router } from "express";
import authMiddleware from "@/middlewares/auth.middleware";
import { isTenant } from "@/middlewares/roles.middleware";
import * as distributorUsersController from "@/controllers/distributorUsers.controller";

const router = Router();
router.get("/", [ authMiddleware, isTenant ], distributorUsersController.fetchDistributorUsers);
export default router;