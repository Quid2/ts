/** ZM Type:
Maybe a ≡   Nothing
          | Just a
*/
import * as Q from '../.././lib/core';
export declare const $Maybe: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<Maybe<A>>;
export declare const ___: Q.zmTypeInfo;
export declare type Maybe<A extends Q.Flat> = Nothing<A> | Just<A>;
export declare class Nothing<A extends Q.Flat> implements Q.Flat {
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Nothing: R;
        Just: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class Just<A extends Q.Flat> implements Q.Flat {
    _0: A;
    constructor(_0: A);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Nothing: R;
        Just: (v0: A) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}