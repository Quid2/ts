"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ADTRef = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x07, 0xb1, 0xb0, 0x45, 0xac, 0x3c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Var(decoders[0](st));
        }
        else {
            if (st.zero()) {
                return new Rec();
            }
            else {
                return new Ext(decoders[0](st));
            }
        } };
    }
};
var Var = (function () {
    function Var(_0) {
        this._0 = _0;
    }
    Var.prototype.match = function (m) { return m.Var(this._0); };
    Var.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Var.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Var;
}());
exports.Var = Var;
var Rec = (function () {
    function Rec() {
    }
    Rec.prototype.match = function (m) { return m.Rec; };
    Rec.prototype.flatMaxSize = function () { return 2 + 0; };
    Rec.prototype.flatEncode = function (st) { st.one(); st.zero(); };
    return Rec;
}());
exports.Rec = Rec;
var Ext = (function () {
    function Ext(_0) {
        this._0 = _0;
    }
    Ext.prototype.match = function (m) { return m.Ext(this._0); };
    Ext.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Ext.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); };
    return Ext;
}());
exports.Ext = Ext;
//# sourceMappingURL=K07b1b045ac3c.js.map