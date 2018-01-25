import * as Q from '../../core';
import * as K7028aa556ebc from '../Type/K7028aa556ebc';
import * as K4bbd38587b9e from '../AbsRef/K4bbd38587b9e';
import * as Kf139d4751fda from '../BLOB/Kf139d4751fda';
import * as K982148c09ddb from '../FlatEncoding/K982148c09ddb';
export declare const $TypedBLOB: Q.zmFold<TypedBLOB>;
export declare class TypedBLOB implements Q.Flat {
    _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>;
    _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>;
    constructor(_0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>, _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>);
    match<R>(m: {
        TypedBLOB: (v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>, v1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
