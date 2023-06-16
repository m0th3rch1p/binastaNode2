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
exports.destroyById = exports.updateById = exports.store = exports.fetchBySlug = exports.index = void 0;
var queryHelpers_1 = require("@/helpers/queryHelpers");
var StrHelper_1 = require("@/helpers/StrHelper");
var multer_1 = require("multer");
var TABLE_NAME = "product_categories";
var multerStorage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'productCategories');
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
}).single('img');
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, categories;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT", ['id', 'name', 'slug', 'image_path', 'created_at'])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    console.error("Error fetching product categories", error);
                    res.status(500).json({ message: 'Error fetching product categories' });
                }
                else if (response) {
                    categories = response[0];
                    res.status(200).json({ categories: categories });
                }
                return [2 /*return*/];
        }
    });
}); };
//@ts-expect-error
exports.fetchBySlug = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, categories;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECTBYCOL", ["slug"], [req.params])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    console.error("Error fetching product categories", error);
                    res.status(500).json({ message: 'Error fetching product categories' });
                }
                else if (response) {
                    categories = response[0];
                    res.status(200).json({ category: categories[0] });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        upload(req, res, function (err) { return __awaiter(void 0, void 0, void 0, function () {
            var productCategory, _a, response, error;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(err instanceof multer_1["default"].MulterError)) return [3 /*break*/, 1];
                        res.status(422).json({ errors: [{
                                    img: err.message
                                }] });
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
                            errors: [{
                                    img: "Please include product images"
                                }]
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        productCategory = req.body;
                        productCategory.slug = StrHelper_1.slugify(productCategory.name);
                        productCategory.image_path = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
                        productCategory.ext = (_c = req.file) === null || _c === void 0 ? void 0 : _c.mimetype;
                        return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "INSERT", ['name', 'slug', 'image_path', 'ext'], [productCategory.name, productCategory.slug, productCategory.image_path, productCategory.ext])];
                    case 4:
                        _a = _d.sent(), response = _a.response, error = _a.error;
                        if (error) {
                            res.status(500).json({ message: 'Error inserting product category' });
                        }
                        else if (response) {
                            res.status(200).json({ status: response.affectedRows });
                        }
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
//@ts-expect-error
exports.updateById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productCategory, _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                productCategory = req.body;
                productCategory.slug = StrHelper_1.slugify(productCategory.name);
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [productCategory.name, productCategory.slug, productCategory.id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: 'Error updating product category' });
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
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "DELETEBYID", null, [req.params.id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: 'Error deleting product category' });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
