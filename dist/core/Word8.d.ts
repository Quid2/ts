import * as Q from "../core";
export declare const $Word8: Q.zmFold<Word8>;
export declare class Word8 implements Q.Flat {
    value: number;
    constructor(value: number);
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
