import * as Q from '../../core';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as Kc23b20389114 from '../Match/Kc23b20389114';
import * as K65149ce3b366 from '../Bit/K65149ce3b366';
export declare const $ByPattern: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<ByPattern<A>>;
export declare class ByPattern<A extends Q.Flat> implements Q.Flat {
    _0: Kb8cd13187198.List<Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>>;
    constructor(_0: Kb8cd13187198.List<Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>>);
    match<R>(m: {
        ByPattern: (v0: Kb8cd13187198.List<Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}