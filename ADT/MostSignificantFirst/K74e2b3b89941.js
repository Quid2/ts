"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$MostSignificantFirst = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x74, 0xe2, 0xb3, 0xb8, 0x99, 0x41],
    decoder: function (decoders) {
        return function (st) { return new MostSignificantFirst(decoders[0](st)); };
    }
};
var MostSignificantFirst = (function () {
    function MostSignificantFirst(_0) {
        this._0 = _0;
    }
    MostSignificantFirst.prototype.toString = function () { return this.toStr(false); };
    MostSignificantFirst.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "MostSignificantFirst" + this._0.toStr(true));
    };
    MostSignificantFirst.prototype.match = function (m) { return m.MostSignificantFirst(this._0); };
    MostSignificantFirst.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    MostSignificantFirst.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return MostSignificantFirst;
}());
exports.MostSignificantFirst = MostSignificantFirst;
//# sourceMappingURL=K74e2b3b89941.js.map