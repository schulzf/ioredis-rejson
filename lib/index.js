"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioredis_1 = require("ioredis");
var RedisWithCall = /** @class */ (function (_super) {
    __extends(RedisWithCall, _super);
    function RedisWithCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RedisWithCall;
}(ioredis_1.default));
var RedisReJSON = /** @class */ (function (_super) {
    __extends(RedisReJSON, _super);
    function RedisReJSON(options) {
        var _this = _super.call(this, options) || this;
        _this.json_get = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!path) return [3 /*break*/, 5];
                        if (!Array.isArray(path)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.GET', __spreadArray([key], path, true))];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.GET', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.call('JSON.GET', key)];
                    case 6:
                        res = _b.sent();
                        _b.label = 7;
                    case 7:
                        if (res) {
                            return [2 /*return*/, JSON.parse(res)];
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        _this.json_del = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.DEL', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.DEL', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        _this.json_forget = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.DEL', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.DEL', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        _this.json_mget = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a, parsed;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(key)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.MGET', __spreadArray(__spreadArray([], key, true), [path], false))];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.MGET', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        if (res) {
                            parsed = res.map(function (item) { return JSON.parse(item); });
                            return [2 /*return*/, parsed];
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        _this.json_set = function (key, path, data, exists) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(exists === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.SET', [
                                key,
                                path,
                                JSON.stringify(data),
                            ])];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.SET', [
                            key,
                            path,
                            JSON.stringify(data),
                            exists,
                        ])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        if (res)
                            return [2 /*return*/, 'OK'];
                        return [2 /*return*/, null];
                }
            });
        }); };
        _this.json_type = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.TYPE', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.TYPE', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        _this.json_numincrby = function (key, path, number) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call('JSON.NUMINCRBY', [key, path, number])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, parseFloat(res)];
                    case 2:
                        error_1 = _a.sent();
                        message = error_1.message;
                        return [2 /*return*/, message];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.json_nummultby = function (key, path, number) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_2, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call('JSON.NUMMULTBY', [key, path, number])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, parseFloat(res)];
                    case 2:
                        error_2 = _a.sent();
                        message = error_2.message;
                        return [2 /*return*/, message];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.json_strappend = function (key, path, data) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_3, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call('JSON.STRAPPEND', [
                                key,
                                path,
                                JSON.stringify(data),
                            ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, parseInt(res)];
                    case 2:
                        error_3 = _a.sent();
                        message = error_3.message;
                        return [2 /*return*/, message];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.json_strlen = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a, error_4, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.STRLEN', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.STRLEN', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        if (!res)
                            return [2 /*return*/, null];
                        return [2 /*return*/, parseInt(res)];
                    case 5:
                        error_4 = _b.sent();
                        message = error_4.message;
                        return [2 /*return*/, message];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrappend = function (key, path, data) { return __awaiter(_this, void 0, void 0, function () {
            var array, res_1, res, error_5, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!Array.isArray(data)) return [3 /*break*/, 2];
                        array = data.map(function (item) { return JSON.stringify(item); });
                        return [4 /*yield*/, this.call('JSON.ARRAPPEND', __spreadArray([
                                key,
                                path
                            ], array, true))];
                    case 1:
                        res_1 = _a.sent();
                        return [2 /*return*/, res_1];
                    case 2: return [4 /*yield*/, this.call('JSON.ARRAPPEND', [
                            key,
                            path,
                            JSON.stringify(data),
                        ])];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_5 = _a.sent();
                        message = error_5.message;
                        return [2 /*return*/, message];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrindex = function (key, path, data, start, stop) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_6, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!(start !== undefined && stop === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.ARRINDEX', [
                                key,
                                path,
                                JSON.stringify(data),
                                start,
                            ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        if (!(start !== undefined && stop !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.call('JSON.ARRINDEX', [
                                key,
                                path,
                                JSON.stringify(data),
                                start,
                                stop,
                            ])];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4: return [4 /*yield*/, this.call('JSON.ARRINDEX', [
                            key,
                            path,
                            JSON.stringify(data),
                        ])];
                    case 5:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 6:
                        error_6 = _a.sent();
                        message = error_6.message;
                        return [2 /*return*/, message];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrinsert = function (key, path, index, data) { return __awaiter(_this, void 0, void 0, function () {
            var array, res_2, res, error_7, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!Array.isArray(data)) return [3 /*break*/, 2];
                        array = data.map(function (item) { return JSON.stringify(item); });
                        return [4 /*yield*/, this.call('JSON.ARRINSERT', __spreadArray([
                                key,
                                path,
                                index
                            ], array, true))];
                    case 1:
                        res_2 = _a.sent();
                        return [2 /*return*/, res_2];
                    case 2: return [4 /*yield*/, this.call('JSON.ARRINSERT', [
                            key,
                            path,
                            index,
                            JSON.stringify(data),
                        ])];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_7 = _a.sent();
                        message = error_7.message;
                        return [2 /*return*/, message];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrlen = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a, error_8, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        res = void 0;
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.ARRLEN', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.ARRLEN', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                    case 5:
                        error_8 = _b.sent();
                        message = error_8.message;
                        return [2 /*return*/, message];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrpop = function (key, path, index) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        res = void 0;
                        if (!(path !== undefined && index === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.ARRPOP', [key, path])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        if (!(path !== undefined && index !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.call('JSON.ARRPOP', [key, path, index])];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4: return [4 /*yield*/, this.call('JSON.ARRPOP', key)];
                    case 5:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 6:
                        error_9 = _a.sent();
                        return [2 /*return*/, error_9.message];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.json_arrtrim = function (key, path, start, stop) { return __awaiter(_this, void 0, void 0, function () {
            var res, error_10, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call('JSON.ARRTRIM', [
                                key,
                                path,
                                start,
                                stop,
                            ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 2:
                        error_10 = _a.sent();
                        message = error_10.message;
                        return [2 /*return*/, message];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.json_objkeys = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.OBJKEYS', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.OBJKEYS', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        _this.json_objlen = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.OBJLEN', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.OBJLEN', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        _this.json_resp = function (key, path) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(path === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.call('JSON.RESP', key)];
                    case 1:
                        _a = (res = _b.sent());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.call('JSON.RESP', [key, path])];
                    case 3:
                        _a = (res = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/, res];
                }
            });
        }); };
        return _this;
    }
    return RedisReJSON;
}(RedisWithCall));
exports.default = RedisReJSON;
//# sourceMappingURL=index.js.map