/** ZM Type:
Note a b ≡   Note {annotation :: a, object :: b}
*/
import * as Q from '../.././lib/core';
export declare const $Note: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<Note<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class Note<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    annotation: A;
    object: B;
    constructor(annotation: A, object: B);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Note: (v0: A, v1: B) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
