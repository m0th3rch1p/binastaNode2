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
exports.destroyById = exports.updateById = exports.store = exports.index = void 0;
var queryHelpers_1 = require("@/helpers/queryHelpers");
var StrHelper_1 = require("@/helpers/StrHelper");
var TABLE_NAME = "blog_categories";
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, categories;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT", ['id', 'name', 'slug', 'created_at'])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: 'Error fetching blog categories' });
                }
                else if (response) {
                    categories = response[0];
                    res.status(200).json({ categories: categories });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blogCategory, _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                blogCategory = req.body;
                blogCategory.slug = StrHelper_1.slugify(blogCategory.name);
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "INSERT", ['name', 'slug'], [blogCategory.name, blogCategory.slug])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: 'Error inserting blog category' });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
//@ts-expect-error
exports.updateById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blogCategory, _a, response, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                blogCategory = req.body;
                blogCategory.slug = StrHelper_1.slugify(blogCategory.name);
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "UPDATEBYID", ['name', 'slug'], [blogCategory.name, blogCategory.slug, blogCategory.id])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error) {
                    res.status(500).json({ message: 'Error updating blog category' });
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
                    res.status(500).json({ message: 'Error deleting blog category' });
                }
                else if (response) {
                    res.status(200).json({ status: response.affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
