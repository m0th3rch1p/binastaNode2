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
exports.destroyById = exports.updateById = exports.authenticate = exports.store = exports.index = void 0;
var bcrypt_1 = require("bcrypt");
var queryHelpers_1 = require("@/helpers/queryHelpers");
var TABLE_NAME = "admins";
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, response, error, admins;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "SELECT", ['id', 'email', 'created_at'])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                if (error)
                    res.status(500).json({ message: 'Error fetching admins. Please try again' });
                else if (response) {
                    admins = response[0];
                    res.status(200).json({ admins: admins });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, _a, _b, response, error, affectedRows, insertId;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                admin = req.body;
                _a = admin;
                return [4 /*yield*/, bcrypt_1["default"].hash(admin.password, 10)];
            case 1:
                _a.password = _c.sent();
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "INSERT", ['email', 'password'], [admin.email, admin.password])];
            case 2:
                _b = _c.sent(), response = _b.response, error = _b.error;
                if (error)
                    res.status(500).json({ message: 'Error registering admin. Please try again' });
                else if (response) {
                    affectedRows = response.affectedRows, insertId = response.insertId;
                    req.session.user_id = insertId;
                    req.session.role = 'admin';
                    res.status(200).json({ status: affectedRows });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.authenticate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, _a, response, error, adminArr, match;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                admin = req.body;
                return [4 /*yield*/, queryHelpers_1.execQuery(TABLE_NAME, "AUTH", null, [admin.email])];
            case 1:
                _a = _b.sent(), response = _a.response, error = _a.error;
                console.log(error);
                if (!error) return [3 /*break*/, 2];
                res.status(500).json({ message: 'Error authenticating admin. Please try again' });
                return [3 /*break*/, 7];
            case 2:
                if (!response) return [3 /*break*/, 6];
                adminArr = response[0];
                if (!adminArr.length) return [3 /*break*/, 4];
                return [4 /*yield*/, bcrypt_1["default"].compare(admin.password, adminArr[0].password)];
            case 3:
                match = _b.sent();
                if (match) {
                    req.session.user_id = adminArr[0].id;
                    req.session.role = 'admin';
                    res.status(200).json({ status: true });
                }
                else
                    res.status(401).json({ status: false, message: 'Invalid credentials' });
                return [3 /*break*/, 5];
            case 4:
                res.status(401).json({ status: false, message: 'Invalid credentials' });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(500).json({ message: 'Error authenticating admin. Please try again' });
                _b.label = 7;
            case 7: return [2 /*return*/];
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
