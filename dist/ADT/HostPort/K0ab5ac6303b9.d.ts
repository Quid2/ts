import * as Q from '../../core';
import * as K295e24d62fac from '../Word16/K295e24d62fac';
export declare const $HostPort: Q.zmFold<HostPort>;
export declare class HostPort implements Q.Flat {
    port: K295e24d62fac.Word16;
    constructor(port: K295e24d62fac.Word16);
    match<R>(m: {
        HostPort: (v0: K295e24d62fac.Word16) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
