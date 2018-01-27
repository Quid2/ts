import * as Q from '../../core';
export declare const $Unit: Q.zmFold<Unit>;
export declare class Unit implements Q.Flat {
    match<R>(m: {
        Unit: R;
    }): R;
    flatMaxSize(): number;
    flatEncode(): void;
}
