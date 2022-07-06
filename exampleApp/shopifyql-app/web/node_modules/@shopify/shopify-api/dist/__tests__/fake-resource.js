"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../base-rest-resource"));
var base_types_1 = require("../base-types");
var FakeResource = /** @class */ (function (_super) {
    tslib_1.__extends(FakeResource, _super);
    function FakeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    _a = FakeResource;
    FakeResource.API_VERSION = base_types_1.ApiVersion.Unstable;
    FakeResource.NAME = 'fake_resource';
    FakeResource.PLURAL_NAME = 'fake_resources';
    FakeResource.READ_ONLY_ATTRIBUTES = ['unsaveable_attribute'];
    FakeResource.HAS_ONE = {
        has_one_attribute: FakeResource,
    };
    FakeResource.HAS_MANY = {
        has_many_attribute: FakeResource,
    };
    FakeResource.PATHS = [
        {
            http_method: 'get',
            operation: 'get',
            ids: ['id'],
            path: 'fake_resources/<id>.json',
        },
        {
            http_method: 'get',
            operation: 'get',
            ids: [],
            path: 'fake_resources.json',
        },
        {
            http_method: 'post',
            operation: 'post',
            ids: [],
            path: 'fake_resources.json',
        },
        {
            http_method: 'put',
            operation: 'put',
            ids: ['id'],
            path: 'fake_resources/<id>.json',
        },
        {
            http_method: 'delete',
            operation: 'delete',
            ids: ['id'],
            path: 'fake_resources/<id>.json',
        },
        {
            http_method: 'get',
            operation: 'get',
            ids: ['id', 'other_resource_id'],
            path: 'other_resources/<other_resource_id>/fake_resources/<id>.json',
        },
        {
            http_method: 'get',
            operation: 'custom',
            ids: ['id', 'other_resource_id'],
            path: 'other_resources/<other_resource_id>/fake_resources/<id>/custom.json',
        },
        {
            http_method: 'delete',
            operation: 'delete',
            ids: ['id', 'other_resource_id'],
            path: 'other_resources/<other_resource_id>/fake_resources/<id>.json',
        },
    ];
    FakeResource.find = function (_b) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result;
        var session = _b.session, params = _b.params, id = _b.id, _c = _b.other_resource_id, other_resource_id = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_b, ["session", "params", "id", "other_resource_id"]);
        return tslib_1.__generator(_a, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, FakeResource.baseFind({
                        session: session,
                        urlIds: { id: id, other_resource_id: other_resource_id },
                        params: tslib_1.__assign(tslib_1.__assign({}, params), otherArgs),
                    })];
                case 1:
                    result = _d.sent();
                    return [2 /*return*/, result ? result[0] : null];
            }
        });
    }); };
    FakeResource.all = function (_b) {
        var session = _b.session, params = _b.params;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(_a, function (_c) {
                return [2 /*return*/, FakeResource.baseFind({
                        session: session,
                        params: params,
                        urlIds: {},
                    })];
            });
        });
    };
    FakeResource.custom = function (_b) {
        var session = _b.session, id = _b.id, other_resource_id = _b.other_resource_id;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(_a, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FakeResource.request({
                            http_method: 'get',
                            operation: 'custom',
                            session: session,
                            urlIds: { id: id, other_resource_id: other_resource_id },
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response.body];
                }
            });
        });
    };
    return FakeResource;
}(base_rest_resource_1.default));
exports.default = FakeResource;
