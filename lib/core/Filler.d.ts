import * as Q from "../core";
export declare const $Filler: Q.zmFold<Filler>;
export declare const ___: Q.zmTypeInfo;
export declare type Filler = FillerBit | FillerEnd;
export declare class FillerBit implements Q.ZM {
    _0: Filler;
    constructor(_0: Filler);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
export declare class FillerEnd implements Q.ZM {
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
