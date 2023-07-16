"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
const roles_middleware_1 = require("../../middlewares/roles.middleware");
const product_policies_1 = require("../../policies/product.policies");
const productsController = __importStar(require("../../controllers/products.controller"));
const productVariations_controller_1 = require("../../controllers/productVariations.controller");
const router = (0, express_1.Router)();
router.get("/", [auth_middleware_1.default, roles_middleware_1.isAdmin], productsController.index);
router.get("/:id", [auth_middleware_1.default, roles_middleware_1.isAdmin], productsController.fetchProductById);
router.post("/", [auth_middleware_1.default, roles_middleware_1.isAdmin], productsController.store);
router.post("/product_variations", [auth_middleware_1.default, roles_middleware_1.isAdmin], productVariations_controller_1.store);
router.put("/:id", [auth_middleware_1.default, roles_middleware_1.isAdmin, product_policies_1.updatePolicy], productsController.updateById);
router.delete("/:id", [auth_middleware_1.default, roles_middleware_1.isAdmin, product_policies_1.idPolicy], productsController.destroyById);
exports.default = router;
