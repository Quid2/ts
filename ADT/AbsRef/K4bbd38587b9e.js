"use strict";
/** ZM Type:
AbsRef ≡   AbsRef (K9f214799149b (K3e8257255cbf Kdc26e9d90047
                                      
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
var K3e8257255cbf = require("../ADT/K3e8257255cbf");
var Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
var K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
exports.$AbsRef = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x4b, 0xbd, 0x38, 0x58, 0x7b, 0x9e],
    decoder: function (decoders) {
        return function (st) { return new AbsRef(K9f214799149b.___.decoder([K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([exports.___.decoder([])])])])(st)); };
    }
};
var AbsRef = /** @class */ (function () {
    function AbsRef(_0) {
        this._0 = _0;
    }
    AbsRef.prototype.toString = function () { return this.toStr(false); };
    AbsRef.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["AbsRef", this._0.toStr(true)].join(' '));
    };
    AbsRef.prototype.pretty = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["AbsRef", this._0.pretty(true)].join(' '));
    };
    AbsRef.prototype.match = function (m) { return m.AbsRef(this._0); };
    AbsRef.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    AbsRef.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return AbsRef;
}());
exports.AbsRef = AbsRef;
