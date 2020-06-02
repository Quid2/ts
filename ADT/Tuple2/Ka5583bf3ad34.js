"use strict";
/** ZM Type:
Tuple2 a b ≡   Tuple2 a b
*/
exports.__esModule = true;
exports.Tuple2 = exports.___ = exports.$Tuple2 = void 0;
var Q = require("@quid2/ts-core");
exports.$Tuple2 = function (t1, t2) {
    return function (f) {
        return f(exports.___, [t1(f), t2(f)]);
    };
};
exports.___ = {
    zid: [0xa5, 0x58, 0x3b, 0xf3, 0xad, 0x34],
    decoder: function (decoders) {
        return function (st) {
            return new Tuple2(decoders[0](st), decoders[1](st));
        };
    }
};
var Tuple2 = /** @class */ (function () {
    function Tuple2(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Tuple2.prototype.toString = function () {
        return this.toStr(false);
    };
    Tuple2.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Tuple2", this._0.toStr(true), this._1.toStr(true)].join(" "));
    };
    Tuple2.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Tuple2", this._0.pretty(true), this._1.pretty(true)].join(" "));
    };
    Tuple2.prototype.match = function (m) {
        return m.Tuple2(this._0, this._1);
    };
    Tuple2.prototype.flatMaxSize = function () {
        return this._0.flatMaxSize() + this._1.flatMaxSize();
    };
    Tuple2.prototype.flatEncode = function (st) {
        this._0.flatEncode(st);
        this._1.flatEncode(st);
    };
    return Tuple2;
}());
exports.Tuple2 = Tuple2;
