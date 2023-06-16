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
exports.execQuery = void 0;
var mysql_database_1 = require("@/database/mysql/mysql.database");
var COMMON_QUERY_STRINGS = function (table, tableKeys) {
    if (tableKeys === void 0) { tableKeys = null; }
    return {
        "SELECT": "SELECT " + (tableKeys === null || tableKeys === void 0 ? void 0 : tableKeys.join(",")) + " FROM " + table,
        "SELECTALL": "SELECT * FROM " + table,
        "SELECTBYID": "SELECT * FROM " + table + " WHERE id = ? LIMIT 1",
        "SELECTBYCOL": "SELECT * FROM " + table + " " + (tableKeys === null || tableKeys === void 0 ? void 0 : tableKeys.map(function (key) { return "WHERE " + key + "=?"; })),
        "INSERT": "INSERT INTO " + table + "(" + tableKeys + ") VALUES (" + ',?'.repeat(tableKeys ? tableKeys.length : 1).slice(1) + ")",
        "BATCHINSERT": "INSERT INTO " + table + "(" + tableKeys + ") VALUES ?",
        "AUTH": "SELECT id, password FROM " + table + " WHERE email = ? LIMIT 1",
        "UPDATEBYID": "UPDATE " + table + " SET " + (tableKeys === null || tableKeys === void 0 ? void 0 : tableKeys.map(function (key) { return key + "=?"; }).join(",")) + " WHERE id = ?",
        "DELETEBYID": "DELETE FROM " + table + " WHERE id = ?"
    };
};
exports.execQuery = function (table, query, tableKeys, params) {
    if (tableKeys === void 0) { tableKeys = null; }
    if (params === void 0) { params = null; }
    return __awaiter(void 0, void 0, ExecQueryReturn, function () {
        var queryStr, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    queryStr = null;
                    switch (query) {
                        case "SELECT":
                            queryStr = COMMON_QUERY_STRINGS(table, tableKeys).SELECT;
                            break;
                        case "SELECTALL":
                            queryStr = COMMON_QUERY_STRINGS(table).SELECTALL;
                            break;
                        case "SELECTBYID":
                            queryStr = COMMON_QUERY_STRINGS(table).SELECTBYID;
                            break;
                        case "INSERT":
                            queryStr = COMMON_QUERY_STRINGS(table, tableKeys).INSERT;
                            break;
                        case "BATCHINSERT":
                            queryStr = COMMON_QUERY_STRINGS(table, tableKeys).BATCHINSERT;
                            break;
                        case "AUTH":
                            queryStr = COMMON_QUERY_STRINGS(table).AUTH;
                            break;
                        case "UPDATEBYID":
                            queryStr = COMMON_QUERY_STRINGS(table, tableKeys).UPDATEBYID;
                            break;
                        case "DELETEBYID":
                            queryStr = COMMON_QUERY_STRINGS(table).DELETEBYID;
                            break;
                        default:
                            queryStr = query;
                            break;
                    }
                    return [4 /*yield*/, mysql_database_1.mysql_db_execute(queryStr, params)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            response: response,
                            error: null
                        }];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, {
                            response: null,
                            error: error_1
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
