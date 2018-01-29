"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../../core");
exports.$NonEmptyList = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xbf, 0x2d, 0x1c, 0x86, 0xeb, 0x20],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Elem(decoders[0](st));
        }
        else {
            return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
var Elem = (function () {
    function Elem(_0) {
        this._0 = _0;
    }
    Elem.prototype.toString = function () { return this.toStr(false); };
    Elem.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Elem" + this._0.toStr(true));
    };
    Elem.prototype.match = function (m) { return m.Elem(this._0); };
    Elem.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Elem.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Elem;
}());
exports.Elem = Elem;
var Cons = (function () {
    function Cons(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Cons.prototype.toString = function () { return this.toStr(false); };
    Cons.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, "Cons" + this._0.toStr(true) + this._1.toStr(true));
    };
    Cons.prototype.match = function (m) { return m.Cons(this._0, this._1); };
    Cons.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Cons.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Cons;
}());
exports.Cons = Cons;
//# sourceMappingURL=Kbf2d1c86eb20.js.map