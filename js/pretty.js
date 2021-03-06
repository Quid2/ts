"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyString = exports.prettyConcat = exports.str = void 0;
const K33445520c45a_1 = require("@quid2/adt/UnicodeLetterOrNumberOrLine/K33445520c45a");
const K3878b3580fc5_1 = require("@quid2/adt/UnicodeLetter/K3878b3580fc5");
const K4bbd38587b9e_1 = require("@quid2/adt/AbsRef/K4bbd38587b9e");
const K9f214799149b_1 = require("@quid2/adt/SHAKE128_48/K9f214799149b");
const K066db52af145_1 = require("@quid2/adt/Char/K066db52af145");
const Kdc26e9d90047_1 = require("@quid2/adt/Identifier/Kdc26e9d90047");
const K86653e040025_1 = require("@quid2/adt/ConTree/K86653e040025");
const Q = require("@quid2/prim");
const K3e8257255cbf_1 = require("@quid2/adt/ADT/K3e8257255cbf");
const K7028aa556ebc_1 = require("@quid2/adt/Type/K7028aa556ebc");
const K07b1b045ac3c_1 = require("@quid2/adt/ADTRef/K07b1b045ac3c");
const Kb8cd13187198_1 = require("@quid2/adt/List/Kb8cd13187198");
//import {Name}
// Check https://www.bennadel.com/blog/3290-using-module-augmentation-to-safely-inject-runtime-methods-using-typescript-and-node-js.htm
// interface Pretty<A> {
//     pretty<A>(v: A): string
// }
// declare module '@quid2/adt/AbsRef/K4bbd38587b9e' {
//     // interface Flat {
//     //     pretty(): string
//     // }
//     // Selectively add pretty to some classes.
//     // interface AbsRef {
//     //     pretty(): string
//     // }
//     // //interface SHAKE128_48<A extends Flat> {
//     // interface SHAKE128_48<A> {
//     //     pretty(): string
//     // }
// }
// class AbsRef implements Pretty {
//     pretty() { return "PRETTY" + prettyAbsRef(this) }
// }
function prettyList(c) {
    var p = "[" + c._0.pretty(false);
    var l = c._1;
    while (l instanceof Kb8cd13187198_1.Cons) {
        p += "," + l._0.pretty(false);
        l = l._1;
    }
    return p + "]";
}
function prettyString(l) {
    return '"' + prettyConcat(l) + '"';
}
exports.prettyString = prettyString;
function prettyConcat(l, separator = "") {
    return l.match({
        Nil: "",
        Cons: (h, t) => h.pretty() + separator + prettyConcat(t),
    });
}
exports.prettyConcat = prettyConcat;
function asArray(l, vs) {
    var vss = vs ? vs : new Array();
    return l.match({
        Nil: vss,
        Cons: function (h, t) {
            vss.push(h);
            return asArray(t, vss);
        },
    });
}
function str(s) {
    return '"' + s + '"';
}
exports.str = str;
function varName(n) {
    return String.fromCharCode(97 + n);
}
function vars(numVars) {
    let vs = "";
    for (var n = 0; n < numVars; n++) {
        vs += varName(n) + " ";
    }
    return vs;
}
function prettyField(f) {
    return f._0.pretty() + ":" + f._1.pretty();
}
function prettyFields(ts) {
    //for (var f of asArray(ts)) { s += prettyField(f) }
    return asArray(ts).map(prettyField).join(", ");
}
// declare global {
//     interface Array<T,A> extends Pretty<A>
// }
// Array.prototype.pretty = function (nested: false) { return asArray(this).toString(); }
Kb8cd13187198_1.Nil.prototype.pretty = () => "[]";
Kb8cd13187198_1.Cons.prototype.pretty = function (nested) {
    return prettyList(this);
};
//Cons.prototype.pretty = function (nested: false) { return asArray(this).toString(); }
K7028aa556ebc_1.TypeApp.prototype.pretty = function (nested = false) {
    return Q.nestedPars(nested, this._0.pretty(true) + " " + this._1.pretty(true));
};
K7028aa556ebc_1.TypeCon.prototype.pretty = function () {
    return this._0.pretty();
};
K07b1b045ac3c_1.Ext.prototype.pretty = function () {
    return this._0.pretty();
};
K07b1b045ac3c_1.Var.prototype.pretty = function () {
    return varName(this._0.value);
};
K07b1b045ac3c_1.Rec.prototype.pretty = () => "\u21AB";
//Rec.prototype.pretty = (currADTName = '\u21AB') => currADTName
// class InEnv<A> implements Q.AsString {
//     //env: string[];
//     //obj: A;
//     constructor(private env: [string],private obj: A) {} //  this.env = env; this.obj = obj }
//     pretty() { return this.env["_"];}
//     toStr() { return "" }
// }
// interface TypeEnv {
//     env :
// }
// var env : [string] : string = new Array();
// env["11234"]="Bool"
// const s = new InEnv(env, new Rec).pretty()
//InNamed<Rec<A>>.prototype.pretty = () => '\u21AB'
K86653e040025_1.Con.prototype.pretty = function () {
    return (this.constrName.pretty() +
        " " +
        this.constrFields.match({
            Left: (ts) => prettyConcat(ts),
            Right: (ts) => "{" + prettyFields(ts) + "}",
        }));
};
K86653e040025_1._ConTree.prototype.pretty = function () {
    return this._0.pretty() + "\n  | " + this._1.pretty();
};
K3e8257255cbf_1.ADT.prototype.pretty = function () {
    return (this.declName.pretty() +
        " " +
        vars(this.declNumParameters.value) +
        this.declCons.match({
            Nothing: "",
            Just: (conTree) => "= " + conTree.pretty(),
        }));
};
Kdc26e9d90047_1.Name.prototype.pretty = function () {
    return this._0.pretty() + prettyConcat(this._1);
};
K3878b3580fc5_1.UnicodeLetter.prototype.pretty = function () {
    return this._0.pretty();
};
K33445520c45a_1.UnicodeLetterOrNumberOrLine.prototype.pretty = function () {
    return this._0.pretty();
};
// Char.prototype.toStr = function(nested = false): string { return "'" + this._0.toString() + "'"; }
//Char.prototype.pretty = function () { return "'" + this.value.toString() + "'"; }
K066db52af145_1.Char.prototype.pretty = function () {
    return this.value;
};
K4bbd38587b9e_1.AbsRef.prototype.pretty = function () {
    return "K" + this._0.pretty();
};
K9f214799149b_1.SHAKE128_48.prototype.pretty = function () {
    function asHex(v) {
        const r = v.value.toString(16);
        return r.length == 1 ? "0" + r : r;
    }
    return (asHex(this._0) +
        asHex(this._1) +
        asHex(this._2) +
        asHex(this._3) +
        asHex(this._4) +
        asHex(this._5));
};
//# sourceMappingURL=pretty.js.map