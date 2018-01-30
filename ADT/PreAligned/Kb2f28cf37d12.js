"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
const Kae1dfeece189 = require("../Filler/Kae1dfeece189");
exports.$PreAligned = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xb2, 0xf2, 0x8c, 0xf3, 0x7d, 0x12],
    decoder: function (decoders) {
        return function (st) { return new PreAligned(Kae1dfeece189.___.decoder([])(st), decoders[0](st)); };
    }
};
class PreAligned {
    constructor(preFiller, preValue) {
        this.preFiller = preFiller;
        this.preValue = preValue;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["PreAligned", this.preFiller.toStr(true), this.preValue.toStr(true)].join(' ')); }
    match(m) { return m.PreAligned(this.preFiller, this.preValue); }
    flatMaxSize() { return this.preFiller.flatMaxSize() + this.preValue.flatMaxSize(); }
    flatEncode(st) { this.preFiller.flatEncode(st); this.preValue.flatEncode(st); }
}
exports.PreAligned = PreAligned;
//# sourceMappingURL=Kb2f28cf37d12.js.map