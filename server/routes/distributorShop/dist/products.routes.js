"use strict";
exports.__esModule = true;
var express_1 = require("express");
var distributorShopController = require("@/controllers/distributorShop.controller");
var domains_middleware_1 = require("@/middlewares/domains.middleware");
var router = express_1.Router();
router.get("/", [domains_middleware_1.verifyDomain], distributorShopController.fetchAllDistributorShopProducts);
exports["default"] = router;
