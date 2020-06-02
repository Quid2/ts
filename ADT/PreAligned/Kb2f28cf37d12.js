"use strict";
/** ZM Type:
PreAligned a ≡   PreAligned {preFiller :: Kae1dfeece189,
                             preValue :: a}
*/
exports.__esModule = true;
exports.PreAligned = exports.___ = exports.$PreAligned = void 0;
var Q = require("@quid2/ts-core");
var Kae1dfeece189 = require("../Filler/Kae1dfeece189");
exports.$PreAligned = function (t1) {
    return function (f) {
        return f(exports.___, [t1(f)]);
    };
};
exports.___ = {
    zid: [0xb2, 0xf2, 0x8c, 0xf3, 0x7d, 0x12],
    decoder: function (decoders) {
        return function (st) {
            return new PreAligned(Kae1dfeece189.___.decoder([])(st), decoders[0](st));
        };
    }
};
var PreAligned = /** @class */ (function () {
    function PreAligned(preFiller, preValue) {
        this.preFiller = preFiller;
        this.preValue = preValue;
    }
    PreAligned.prototype.toString = function () {
        return this.toStr(false);
    };
    PreAligned.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, [
            "PreAligned",
            this.preFiller.toStr(true),
            this.preValue.toStr(true),
        ].join(" "));
    };
    PreAligned.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, [
            "PreAligned",
            this.preFiller.pretty(true),
            this.preValue.pretty(true),
        ].join(" "));
    };
    PreAligned.prototype.match = function (m) {
        return m.PreAligned(this.preFiller, this.preValue);
    };
    PreAligned.prototype.flatMaxSize = function () {
        return this.preFiller.flatMaxSize() + this.preValue.flatMaxSize();
    };
    PreAligned.prototype.flatEncode = function (st) {
        this.preFiller.flatEncode(st);
        this.preValue.flatEncode(st);
    };
    return PreAligned;
}());
exports.PreAligned = PreAligned;
