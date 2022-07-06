"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectSocket = exports.waitForData = exports.poll = exports.wait = void 0;
var tslib_1 = require("tslib");
function wait(ms) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); });
}
exports.wait = wait;
function poll(func, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.interval, interval = _c === void 0 ? 100 : _c, _d = _b.timeout, timeout = _d === void 0 ? 5000 : _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var start, elapsed, success, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    start = Date.now();
                    _f.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 7];
                    elapsed = Date.now() - start;
                    if (elapsed > timeout) {
                        throw Error('Timeout');
                    }
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, func()];
                case 3:
                    success = _f.sent();
                    if (success)
                        return [2 /*return*/];
                    return [3 /*break*/, 5];
                case 4:
                    _e = _f.sent();
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, wait(interval)];
                case 6:
                    _f.sent();
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.poll = poll;
function waitForData(socket) {
    return new Promise(function (resolve, reject) {
        function data() {
            resolve('data');
            cleanup();
        }
        function error(err) {
            reject(err);
            cleanup();
        }
        function close() {
            resolve('no data');
            cleanup();
        }
        function cleanup() {
            socket.off('data', data);
            socket.off('error', error);
            socket.off('close', close);
        }
        socket.on('data', data);
        socket.on('error', error);
        socket.on('close', close);
    });
}
exports.waitForData = waitForData;
function connectSocket(socket, opts) {
    return new Promise(function (resolve, reject) {
        function error(err) {
            reject(err);
            cleanup();
        }
        function cleanup() {
            socket.off('error', error);
        }
        socket.on('error', error);
        socket.connect(opts, function () {
            resolve();
            cleanup();
        });
    });
}
exports.connectSocket = connectSocket;
