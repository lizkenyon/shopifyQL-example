"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisSessionStorage = void 0;
var tslib_1 = require("tslib");
var redis_1 = require("redis");
var session_utils_1 = require("../session-utils");
var defaultRedisSessionStorageOptions = {
    sessionKeyPrefix: 'shopify_sessions',
};
var RedisSessionStorage = /** @class */ (function () {
    function RedisSessionStorage(dbUrl, opts) {
        if (opts === void 0) { opts = {}; }
        this.dbUrl = dbUrl;
        if (typeof this.dbUrl === 'string') {
            this.dbUrl = new URL(this.dbUrl);
        }
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultRedisSessionStorageOptions), opts);
        this.ready = this.init();
    }
    RedisSessionStorage.withCredentials = function (host, db, username, password, opts) {
        return new RedisSessionStorage(new URL("redis://".concat(encodeURIComponent(username), ":").concat(encodeURIComponent(password), "@").concat(host, "/").concat(db)), opts);
    };
    RedisSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.set(this.fullKey(session.id), JSON.stringify((0, session_utils_1.sessionEntries)(session)))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RedisSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rawResult;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.get(this.fullKey(id))];
                    case 2:
                        rawResult = _a.sent();
                        if (!rawResult)
                            return [2 /*return*/, undefined];
                        rawResult = JSON.parse(rawResult);
                        return [2 /*return*/, (0, session_utils_1.sessionFromEntries)(rawResult)];
                }
            });
        });
    };
    RedisSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.del(this.fullKey(id))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RedisSessionStorage.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.quit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSessionStorage.prototype.fullKey = function (name) {
        return "".concat(this.options.sessionKeyPrefix, "_").concat(name);
    };
    RedisSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.client = (0, redis_1.createClient)({
                            url: this.dbUrl.toString(),
                        });
                        return [4 /*yield*/, this.client.connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RedisSessionStorage;
}());
exports.RedisSessionStorage = RedisSessionStorage;
