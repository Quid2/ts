"use strict";
/** ZM Type:
Bit ≡   V0
      | V1
*/
exports.__esModule = true;
exports.$Bit = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x65, 0x14, 0x9c, 0xe3, 0xb3, 0x66],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new V0();
        }
        else {
            return new V1();
        } };
    }
};
var V0 = /** @class */ (function () {
    function V0() {
    }
    V0.prototype.toString = function () { return this.toStr(false); };
    V0.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "V0";
    };
    V0.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "V0";
    };
    V0.prototype.match = function (m) { return m.V0; };
    V0.prototype.flatMaxSize = function () { return 1 + 0; };
    V0.prototype.flatEncode = function (st) { st.zero(); };
    return V0;
}());
exports.V0 = V0;
var V1 = /** @class */ (function () {
    function V1() {
    }
    V1.prototype.toString = function () { return this.toStr(false); };
    V1.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "V1";
    };
    V1.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "V1";
    };
    V1.prototype.match = function (m) { return m.V1; };
    V1.prototype.flatMaxSize = function () { return 1 + 0; };
    V1.prototype.flatEncode = function (st) { st.one(); };
    return V1;
}());
exports.V1 = V1;
