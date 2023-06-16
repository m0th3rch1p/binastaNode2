"use strict";
exports.__esModule = true;
var express_1 = require("express");
var blogsController = require("@/controllers/blogs.controller");
var router = express_1.Router();
router.get("/", blogsController.index);
router.get("/:slug", blogsController.fetchBySlug);
exports["default"] = router;
