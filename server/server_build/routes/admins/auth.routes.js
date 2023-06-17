"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_policies_1 = require("@/policies/auth.policies");
const admins_controller_1 = require("@/controllers/admins.controller");
const router = (0, express_1.Router)();
router.post("/login", [auth_policies_1.authPolicy], admins_controller_1.authenticate);
exports.default = router;
