import { Router } from "express";
import { emailPolicy } from "@/policies/email.policies";
import * as subscribersController from "@/controllers/shopSubscribers.controller";

const router = Router();
router.post("/", [ emailPolicy ], subscribersController.store);

export default router;