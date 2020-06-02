"use strict";
/** ZM Type:
Bool ≡   False
       | True
*/
exports.__esModule = true;
exports.True = exports.False = exports.___ = exports.$Bool = void 0;
exports.$Bool = function (f) {
    return f(exports.___, []);
};
exports.___ = {
    zid: [0x30, 0x6f, 0x19, 0x81, 0xb4, 0x1c],
    decoder: function (decoders) {
        return function (st) {
            if (st.zero()) {
                return new False();
            }
            else {
                return new True();
            }
        };
    }
};
var False = /** @class */ (function () {
    function False() {
    }
    False.prototype.toString = function () {
        return this.toStr(false);
    };
    False.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "False";
    };
    False.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "False";
    };
    False.prototype.match = function (m) {
        return m.False;
    };
    False.prototype.flatMaxSize = function () {
        return 1 + 0;
    };
    False.prototype.flatEncode = function (st) {
        st.zero();
    };
    return False;
}());
exports.False = False;
var True = /** @class */ (function () {
    function True() {
    }
    True.prototype.toString = function () {
        return this.toStr(false);
    };
    True.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return "True";
    };
    True.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return "True";
    };
    True.prototype.match = function (m) {
        return m.True;
    };
    True.prototype.flatMaxSize = function () {
        return 1 + 0;
    };
    True.prototype.flatEncode = function (st) {
        st.one();
    };
    return True;
}());
exports.True = True;
