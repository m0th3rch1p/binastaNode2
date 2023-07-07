"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_middleware_1 = require("../../middlewares/roles.middleware");
const distributorOrders_controller_1 = require("../../controllers/distributorOrders.controller");
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
const router = (0, express_1.Router)();
router.get("/", [auth_middleware_1.default, roles_middleware_1.isTenant], distributorOrders_controller_1.fetchDistributorOrders);
router.get("/:id", [auth_middleware_1.default, roles_middleware_1.isTenant], distributorOrders_controller_1.fetchDistributorOrderById);
router.get("/:ref", [auth_middleware_1.default, roles_middleware_1.isTenant], distributorOrders_controller_1.fetchDistributorOrderByRef);
router.post("/", [auth_middleware_1.default, roles_middleware_1.isTenant], distributorOrders_controller_1.store);
exports.default = router;
