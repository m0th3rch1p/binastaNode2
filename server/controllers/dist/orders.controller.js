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
exports.destroyById = exports.updateById = exports.store = exports.fetchUserUserOrderById = exports.fetchUserOrders = exports.index = void 0;
var lodash_1 = require("lodash");
var queryHelpers_1 = require("@/helpers/queryHelpers");
var StrHelper_1 = require("@/helpers/StrHelper");
var TABLE_NAME = "orders";
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, orders;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECTALL")];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "Error fetching orders" });
                }
                else if (response) {
                    orders = response[0];
                    res.status(200).json({ orders: orders });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.fetchUserOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, orders;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECTBYCOL", ['ref', 'status', 'amount', 'created_at'], [req.session.user_id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: "Error fetching orders" });
                }
                else if (response) {
                    orders = response[0];
                    res.status(200).json({ orders: orders });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.fetchUserUserOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, orders, orderProductVariationResponse, groupedVariations_1, opvIds, productVariationsResponse, productVariationsEmbedded;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT ref, status, amount, created_at FROM orders WHERE id =? AND user_id = ?", null, [req.params.id, req.session.user_id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (!error) return [3 /*break*/, 2];
                res.status(500).json({ message: "Error fetching order by id" });
                return [3 /*break*/, 5];
            case 2:
                if (!response) return [3 /*break*/, 5];
                orders = response[0];
                return [4 /*yield*/, queryHelpers_1.execQuery("order_product_variations", "SELECT product_variation_id, quantity FROM order_product_variations WHERE order_id = ?", null, [req.params.id])];
            case 3:
                orderProductVariationResponse = (_b.sent()).response;
                groupedVariations_1 = lodash_1["default"].groupBy(orderProductVariationResponse === null || orderProductVariationResponse === void 0 ? void 0 : orderProductVariationResponse[0], 'product_variation_id');
                opvIds = orderProductVariationResponse === null || orderProductVariationResponse === void 0 ? void 0 : orderProductVariationResponse[0].map(function (opv) { return opv.product_variation_id; });
                return [4 /*yield*/, queryHelpers_1.execQuery("product_variations", "SELECT pv.id, pv.variation, pv.buy_price, p.name as product_name FROM product_variations pv INNER JOIN products p ON p.id = pv.product_id WHERE pv.id IN (?)", null, opvIds)];
            case 4:
                productVariationsResponse = (_b.sent()).response;
                productVariationsEmbedded = lodash_1["default"].map(productVariationsResponse === null || productVariationsResponse === void 0 ? void 0 : productVariationsResponse[0], function (pv) {
                    return __assign(__assign({}, pv), { quantity: groupedVariations_1 === null || groupedVariations_1 === void 0 ? void 0 : groupedVariations_1[pv.id] });
                });
                res.status(200).json({ order: orders[0], product_variations: productVariationsEmbedded });
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, _a, response, error, productVariations, orderProductVariations_1, _b, variationResponse, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                order = req.body;
                order.ref = StrHelper_1.makeRef(8);
                order.userId = req.session.user_id;
                order.userAddressId = req.body.user_address_id;
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "INSERT", [
                        "user_id",
                        "user_address_id",
                        "ref",
                    ], [
                        order.userId,
                        order.userAddressId,
                        order.ref
                    ])];
            case 1:
                _a = _c.sent(), response = _a.response, error = _a.error;
                if (!error) return [3 /*break*/, 2];
                console.log(error);
                res.status(500).json({ message: "Error storing order" });
                return [3 /*break*/, 4];
            case 2:
                if (!response) return [3 /*break*/, 4];
                productVariations = req.body.product_variations;
                orderProductVariations_1 = [];
                productVariations.forEach(function (variation) {
                    orderProductVariations_1.push([response[0].insertId, variation[0], variation[1]]);
                });
                return [4 /*yield*/, queryHelpers_1.execQuery("order_product_variations", "BATCHINSERT", [
                        "order_id",
                        "product_variation_id",
                        "quantity"
                    ], [orderProductVariations_1])];
            case 3:
                _b = _c.sent(), variationResponse = _b.response, error_1 = _b.error;
                res.status(200).json({ status: variationResponse === null || variationResponse === void 0 ? void 0 : variationResponse[0].affectedRows, id: variationResponse === null || variationResponse === void 0 ? void 0 : variationResponse[0].insertId });
                _c.label = 4;
            case 4: return [2 /*return*/];
        }
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
