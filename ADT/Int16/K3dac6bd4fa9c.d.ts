import * as Q from '../../core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as K295e24d62fac from '../Word16/K295e24d62fac';
export declare const $Int16: Q.zmFold<Int16>;
export declare class Int16 implements Q.Flat {
    _0: K03226796ede4.ZigZag<K295e24d62fac.Word16>;
    constructor(_0: K03226796ede4.ZigZag<K295e24d62fac.Word16>);
    match<R>(m: {
        Int16: (v0: K03226796ede4.ZigZag<K295e24d62fac.Word16>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}