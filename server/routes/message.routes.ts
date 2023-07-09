import { Router } from "express";
import * as messagePolicies from "@/policies/message.policies";
import * as messagesController from "@/controllers/mainMessages.controller"

const router = Router();
router.post("/", [ messagePolicies.storePolicy ], messagesController.store);
export default router;