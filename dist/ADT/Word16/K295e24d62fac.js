"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word16 = function (f) { return f(___, []); };
var ___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) { return new Word16(decoders[0](st)); };
    }
};
var Word16 = (function () {
    function Word16(_0) {
        this._0 = _0;
    }
    Word16.prototype.match = function (m) { return m.Word16(this._0); };
    Word16.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word16.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word16;
}());
exports.Word16 = Word16;
//# sourceMappingURL=K295e24d62fac.js.map