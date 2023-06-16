"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.destroyById = exports.updateById = exports.store = exports.searchUserProducts = exports.fetchUserProductsByCategorySlug = exports.fetchUserProductBySlug = exports.fetchAllUserProducts = exports.index = void 0;
var multer_1 = require("multer");
var queryHelpers_1 = require("@/helpers/queryHelpers");
var lodash_1 = require("lodash");
var StrHelper_1 = require("@/helpers/StrHelper");
var TABLE_NAME = "products";
var multerStorage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'productImages');
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
}).array('img[]', 2);
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, products;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECTALL")];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    console.error(error);
                    res.status(500).json({
                        message: "Error fetching products"
                    });
                }
                else if (response) {
                    products = response[0];
                    res.status(200).json({
                        products: products
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.fetchAllUserProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, productsArr, error, productIds, _b, variationsArr, error_1, _c, imagesArr, imagesError, groupedVariations_1, groupImages_1, productsEmbedded;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "\n    SELECT p.id, p.name as name, p.slug as slug FROM products p \n    INNER JOIN (SELECT p.id FROM products p LIMIT " + req.query.per_page + " OFFSET " + req.query.offset + ") AS tmp USING (id)\n    ")];
            case 1:
                _a = _d.sent(), productsArr = _a.response, error = _a.error;
                if (!error) return [3 /*break*/, 2];
                console.error(error);
                res.status(500).json({
                    message: "Error fetching products"
                });
                return [2 /*return*/];
            case 2:
                if (!productsArr) return [3 /*break*/, 5];
                productIds = lodash_1["default"].map(productsArr[0], function (product) { return product.id; });
                return [4 /*yield*/, queryHelpers_1.execQuery("product_variations", "SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (" + ',?'.repeat(productIds.length).slice(1) + ")", null, productIds)];
            case 3:
                _b = _d.sent(), variationsArr = _b.response, error_1 = _b.error;
                return [4 /*yield*/, queryHelpers_1.execQuery("producty_images", "SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id IN (" + ',?'.repeat(productIds.length).slice(1) + ")", null, productIds)];
            case 4:
                _c = _d.sent(), imagesArr = _c.response, imagesError = _c.error;
                groupedVariations_1 = lodash_1["default"].groupBy(variationsArr === null || variationsArr === void 0 ? void 0 : variationsArr[0], 'product_id');
                groupImages_1 = lodash_1["default"].groupBy(imagesArr === null || imagesArr === void 0 ? void 0 : imagesArr[0], 'product_id');
                productsEmbedded = lodash_1["default"].map(productsArr[0], function (record) {
                    return __assign(__assign({}, record), { variations: groupedVariations_1[record.id], images: groupImages_1[record.id] });
                });
                res.status(200).json({ products: productsEmbedded });
                _d.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.fetchUserProductBySlug = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, productsArr, productsErr, productIds, _b, variationsArr, error, _c, imagesArr, imagesError, relatedArr, relatedProductsId, relatedVariationsArr, groupedRelatedVariations_1, groupedVariations_2, groupImages_2, relatedEmbedded_1, productsEmbedded;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT p.id, p.category_id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.slug = ? LIMIT 1", null, [req.params.slug])];
            case 1:
                _a = _d.sent(), productsArr = _a.response, productsErr = _a.error;
                if (!productsErr) return [3 /*break*/, 2];
                res.status(500).json({
                    message: "Error fetching products"
                });
                return [3 /*break*/, 7];
            case 2:
                if (!productsArr) return [3 /*break*/, 7];
                productIds = lodash_1["default"].map(productsArr[0], function (product) { return product.id; });
                return [4 /*yield*/, queryHelpers_1.execQuery("product_variations", "SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (" + ',?'.repeat(productIds.length).slice(1) + ")", null, productIds)];
            case 3:
                _b = _d.sent(), variationsArr = _b.response, error = _b.error;
                return [4 /*yield*/, queryHelpers_1.execQuery("producty_images", "SELECT pi.product_id, pi.path_url as url FROM product_images pi WHERE pi.product_id IN (" + ',?'.repeat(productIds.length).slice(1) + ")", null, productIds)];
            case 4:
                _c = _d.sent(), imagesArr = _c.response, imagesError = _c.error;
                return [4 /*yield*/, queryHelpers_1.execQuery("products", "SELECT p.id, p.name as name, p.slug as slug, p.description FROM products p WHERE p.category_id = ? LIMIT 8", null, [productsArr[0][0].category_id])];
            case 5:
                relatedArr = (_d.sent()).response;
                if (!relatedArr) return [3 /*break*/, 7];
                relatedProductsId = lodash_1["default"].map(relatedArr[0], function (related) { return related.id; });
                return [4 /*yield*/, queryHelpers_1.execQuery("product_variations", "SELECT pv.id, pv.product_id, pv.variation, pv.buy_price FROM product_variations pv WHERE pv.product_id IN (" + ',?'.repeat(relatedProductsId.length).slice(1) + ")", null, relatedProductsId)];
            case 6:
                relatedVariationsArr = (_d.sent()).response;
                groupedRelatedVariations_1 = lodash_1["default"].groupBy(relatedVariationsArr === null || relatedVariationsArr === void 0 ? void 0 : relatedVariationsArr[0], 'product_id');
                groupedVariations_2 = lodash_1["default"].groupBy(variationsArr === null || variationsArr === void 0 ? void 0 : variationsArr[0], 'product_id');
                groupImages_2 = lodash_1["default"].groupBy(imagesArr === null || imagesArr === void 0 ? void 0 : imagesArr[0], 'product_id');
                relatedEmbedded_1 = lodash_1["default"].map(relatedArr === null || relatedArr === void 0 ? void 0 : relatedArr[0], function (record) {
                    return __assign(__assign({}, record), { variations: groupedRelatedVariations_1[record.id] });
                });
                productsEmbedded = lodash_1["default"].map(productsArr === null || productsArr === void 0 ? void 0 : productsArr[0], function (record) {
                    return __assign(__assign({}, record), { variations: groupedVariations_2[record.id], images: groupImages_2[record.id], related: relatedEmbedded_1 });
                });
                res.status(200).json({ product: productsEmbedded });
                _d.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.fetchUserProductsByCategorySlug = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT pc.name as category_name, pc.slug as category_slug, p.name, p.slug FROM products p INNER JOIN product_categories pc ON p.category_id = pc.id WHERE pc.slug = ?", null, [req.params.slug])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({
                        message: "Error fetching products"
                    });
                }
                else if (response) {
                    res.status(200).json({
                        products: response[0]
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.searchUserProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT pc.name as category_name, pc.slug as category_slug, p.name, p.slug FROM products p INNER JOIN product_categories pc ON p.category_id = pc.id WHERE p.name LIKE ? LIMIT 10", null, ["%" + req.params.query + "%"])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({
                        message: "Error searching for products"
                    });
                }
                else if (response) {
                    res.status(200).json({
                        products: response[0]
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        upload(req, res, function (err) { return __awaiter(void 0, void 0, void 0, function () {
            var product, _a, response_1, error, files;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(err instanceof multer_1["default"].MulterError)) return [3 /*break*/, 1];
                        res.status(422).json({ errors: [{
                                    img: err.message
                                }] });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!err) return [3 /*break*/, 2];
                        res.status(500).json({ message: "Error uploading file" });
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(!req.files || !req.files.length)) return [3 /*break*/, 3];
                        res.status(422).json({
                            errors: [{
                                    img: "Please inlcude product images"
                                }]
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        product = req.body;
                        product.slug = StrHelper_1.slugify(product.name);
                        product.categoryId = req.body.category_id;
                        return [4 /*yield*/, queryHelpers_1.execQuery("products", "INSERT", ['category_id', 'name', 'slug', 'description'], [product.categoryId, product.name, product.slug, product.description])];
                    case 4:
                        _a = _b.sent(), response_1 = _a.response, error = _a.error;
                        if (error) {
                            res.status(500).json({ message: "There was an error storing product" });
                        }
                        else {
                            files = req.files;
                            files.forEach(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                                var productImage;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            productImage = {
                                                productId: response_1 === null || response_1 === void 0 ? void 0 : response_1[0].insertId,
                                                pathUrl: file.filename,
                                                ext: file.mimetype
                                            };
                                            return [4 /*yield*/, queryHelpers_1.execQuery("product_images", "INSERT", ['product_id', 'path_url', 'ext'], [productImage.productId, productImage.pathUrl, productImage.ext])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            res.status(200).json({
                                status: true
                            });
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
//@ts-expect-error
exports.updateById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
//@ts-expect-error
exports.destroyById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
