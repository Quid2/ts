import * as Q from '../../core';
import * as K20ffacc8f8c9 from '../LeastSignificantFirst/K20ffacc8f8c9';
import * as Kbf2d1c86eb20 from '../NonEmptyList/Kbf2d1c86eb20';
import * as K74e2b3b89941 from '../MostSignificantFirst/K74e2b3b89941';
import * as Kf4c946334a7e from '../Word7/Kf4c946334a7e';
export declare const $Word: Q.zmFold<Word>;
export declare class Word implements Q.Flat {
    _0: K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>;
    constructor(_0: K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>);
    match<R>(m: {
        Word: (v0: K20ffacc8f8c9.LeastSignificantFirst<Kbf2d1c86eb20.NonEmptyList<K74e2b3b89941.MostSignificantFirst<Kf4c946334a7e.Word7>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
