/** ZM Type:
UTF8Encoding ≡   UTF8Encoding
*/
import * as Q from "@quid2/ts-core";
export declare const $UTF8Encoding: Q.zmFold<UTF8Encoding>;
export declare const ___: Q.zmTypeInfo;
export declare class UTF8Encoding implements Q.ZM {
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { UTF8Encoding: R }): R;
  flatMaxSize(): number;
  flatEncode(): void;
}
