"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batteryOfTests = void 0;
var tslib_1 = require("tslib");
var context_1 = require("../../../../context");
var session_1 = require("../../session");
var session_utils_1 = require("../../session-utils");
function batteryOfTests(storageFactory) {
    var _this = this;
    it('can store and delete all kinds of sessions', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var sessionFactories, sessionId, storage, sessionFactories_1, sessionFactories_1_1, factory, session, _a, _b, loadedSession, e_1_1;
        var e_1, _c;
        var _this = this;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    sessionFactories = [
                        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var session;
                            return tslib_1.__generator(this, function (_a) {
                                session = new session_1.Session(sessionId, 'shop', 'state', false);
                                session.scope = context_1.Context.SCOPES.toString();
                                session.accessToken = '123';
                                return [2 /*return*/, session];
                            });
                        }); },
                        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var session, expiryDate;
                            return tslib_1.__generator(this, function (_a) {
                                session = new session_1.Session(sessionId, 'shop', 'state', false);
                                expiryDate = new Date();
                                expiryDate.setMinutes(expiryDate.getMinutes() + 60);
                                session.expires = expiryDate;
                                session.accessToken = '123';
                                session.scope = context_1.Context.SCOPES.toString();
                                return [2 /*return*/, session];
                            });
                        }); },
                        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var session;
                            return tslib_1.__generator(this, function (_a) {
                                session = new session_1.Session(sessionId, 'shop', 'state', false);
                                session.expires = null;
                                session.scope = context_1.Context.SCOPES.toString();
                                session.accessToken = '123';
                                return [2 /*return*/, session];
                            });
                        }); },
                        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var session;
                            return tslib_1.__generator(this, function (_a) {
                                session = new session_1.Session(sessionId, 'shop', 'state', false);
                                session.expires = undefined;
                                session.scope = context_1.Context.SCOPES.toString();
                                session.accessToken = '123';
                                return [2 /*return*/, session];
                            });
                        }); },
                        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var session;
                            return tslib_1.__generator(this, function (_a) {
                                session = new session_1.Session(sessionId, 'shop', 'state', false);
                                // eslint-disable-next-line  @typescript-eslint/naming-convention
                                session.onlineAccessInfo = { associated_user: {} };
                                session.onlineAccessInfo.associated_user.id = 123;
                                session.scope = context_1.Context.SCOPES.toString();
                                session.accessToken = '123';
                                return [2 /*return*/, session];
                            });
                        }); },
                    ];
                    sessionId = 'test_session';
                    return [4 /*yield*/, storageFactory()];
                case 1:
                    storage = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 14, 15, 16]);
                    sessionFactories_1 = tslib_1.__values(sessionFactories), sessionFactories_1_1 = sessionFactories_1.next();
                    _d.label = 3;
                case 3:
                    if (!!sessionFactories_1_1.done) return [3 /*break*/, 13];
                    factory = sessionFactories_1_1.value;
                    return [4 /*yield*/, factory()];
                case 4:
                    session = _d.sent();
                    return [4 /*yield*/, expect(storage.storeSession(session)).resolves.toBe(true)];
                case 5:
                    _d.sent();
                    _a = expect;
                    _b = session_utils_1.sessionEqual;
                    return [4 /*yield*/, storage.loadSession(sessionId)];
                case 6:
                    _a.apply(void 0, [_b.apply(void 0, [_d.sent(), session])]).toBe(true);
                    return [4 /*yield*/, expect(storage.storeSession(session)).resolves.toBe(true)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, storage.loadSession(sessionId)];
                case 8:
                    loadedSession = _d.sent();
                    expect((0, session_utils_1.sessionEqual)(loadedSession, session)).toBe(true);
                    expect(loadedSession === null || loadedSession === void 0 ? void 0 : loadedSession.isActive()).toBe(true);
                    return [4 /*yield*/, expect(storage.deleteSession(sessionId)).resolves.toBe(true)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, expect(storage.loadSession(sessionId)).resolves.toBeUndefined()];
                case 10:
                    _d.sent();
                    // Deleting a non-existing session should work
                    return [4 /*yield*/, expect(storage.deleteSession(sessionId)).resolves.toBe(true)];
                case 11:
                    // Deleting a non-existing session should work
                    _d.sent();
                    _d.label = 12;
                case 12:
                    sessionFactories_1_1 = sessionFactories_1.next();
                    return [3 /*break*/, 3];
                case 13: return [3 /*break*/, 16];
                case 14:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 16];
                case 15:
                    try {
                        if (sessionFactories_1_1 && !sessionFactories_1_1.done && (_c = sessionFactories_1.return)) _c.call(sessionFactories_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/];
            }
        });
    }); });
    it('can store sessions with unexpected fields', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var storage, sessionId, session, _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, storageFactory()];
                case 1:
                    storage = _c.sent();
                    sessionId = 'test_session';
                    session = new session_1.Session(sessionId, 'shop', 'state', true);
                    session.someField = 'lol';
                    return [4 /*yield*/, expect(storage.storeSession(session)).resolves.toBe(true)];
                case 2:
                    _c.sent();
                    _a = expect;
                    _b = session_utils_1.sessionEqual;
                    return [4 /*yield*/, storage.loadSession(sessionId)];
                case 3:
                    _a.apply(void 0, [_b.apply(void 0, [_c.sent(), session])]).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('can store and delete sessions with online tokens', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var storage, sessionId, session, _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, storageFactory()];
                case 1:
                    storage = _c.sent();
                    sessionId = 'test_session';
                    session = new session_1.Session(sessionId, 'shop', 'state', true);
                    return [4 /*yield*/, expect(storage.storeSession(session)).resolves.toBe(true)];
                case 2:
                    _c.sent();
                    _a = expect;
                    _b = session_utils_1.sessionEqual;
                    return [4 /*yield*/, storage.loadSession(sessionId)];
                case 3:
                    _a.apply(void 0, [_b.apply(void 0, [_c.sent(), session])]).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('wrong ids return null sessions', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var storage;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storageFactory()];
                case 1:
                    storage = _a.sent();
                    return [4 /*yield*/, expect(storage.loadSession('not_a_session_id')).resolves.toBeUndefined()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.batteryOfTests = batteryOfTests;
