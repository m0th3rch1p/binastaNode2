"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.destroyById = exports.updateById = exports.fetchBySlug = exports.store = exports.index = void 0;
var queryHelpers_1 = require("@/helpers/queryHelpers");
var StrHelper_1 = require("@/helpers/StrHelper");
var multer_1 = require("multer");
var multerStorage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, "blogPosts");
    }
});
var multerFilter = function (req, file, cb) {
    switch (file.mimetype.split("/")[1].toLowerCase()) {
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "svg":
        case "ico":
        case "svg+xml":
        case "webp":
            cb(null, true);
            break;
        default:
            cb(new Error("File is not an image"));
            break;
    }
};
var upload = multer_1["default"]({
    storage: multerStorage,
    fileFilter: multerFilter
}).single("img");
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, blogs, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery("blogs", "SELECTALL")];
            case 1:
                _a = _b.sent(), blogs = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "error fetching blogs" });
                }
                else if (blogs) {
                    res.status(200).json({ blogs: blogs[0] });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        upload(req, res, function (err) { return __awaiter(void 0, void 0, void 0, function () {
            var blog, _a, response, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(err instanceof multer_1["default"].MulterError)) return [3 /*break*/, 1];
                        res.status(422).json({
                            errors: [
                                {
                                    img: err.message
                                }
                            ]
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!err) return [3 /*break*/, 2];
                        console.log(err);
                        res.status(500).json({ message: "Error uploading file" });
                        return [3 /*break*/, 5];
                    case 2:
                        console.log(req.file);
                        if (!!req.file) return [3 /*break*/, 3];
                        res.status(422).json({
                            errors: [
                                {
                                    img: "Please include product images"
                                }
                            ]
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        blog = req.body;
                        blog.slug = StrHelper_1.slugify(blog.title);
                        blog.blogCategoryId = req.body.blog_category_id;
                        blog.imagePath = req.file.filename;
                        blog.ext = req.file.mimetype;
                        return [4 /*yield*/, queryHelpers_1.execQuery("blogs", "INSERT", [
                                "blog_category_id",
                                "title",
                                "slug",
                                "post",
                                "description",
                                "image_path",
                                "ext"
                            ], [
                                blog.blogCategoryId,
                                blog.title,
                                blog.slug,
                                blog.post,
                                blog.description,
                                blog.imagePath,
                                blog.ext
                            ])];
                    case 4:
                        _a = _b.sent(), response = _a.response, error = _a.error;
                        if (error) {
                            res.status(500).json({ message: "error fetching blogs" });
                        }
                        else if (response) {
                            res.status(200).json({ status: response.affectedRows });
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.fetchBySlug = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, blogArr, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery("blogs", "SELECT title, slug, post, image_path, ext, created_at FROM blogs WHERE slug=?", [], [req.params.slug])];
            case 1:
                _a = _b.sent(), blogArr = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "error fetching blog by slug" });
                }
                else if (blogArr) {
                    res.status(200).json({ blog: blogArr[0] });
                }
                return [2 /*return*/];
        }
    });
}); };
//@ts-expect-error
exports.updateById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery("blogs", "UPDATEBYID", [], [])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "error updating blogs" });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
//@ts-expect-error
exports.destroyById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery("blogs", "DELETEBYID", ["id"], [req.params.id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "error deleting blogs" });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
