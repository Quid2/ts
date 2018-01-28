import { zmFold } from "./api";
import { TypedBLOB } from './ADT/TypedBLOB/K614edd84c8bd';
import { BLOB } from './ADT/BLOB/Kf139d4751fda';
import { FlatEncoding } from './ADT/FlatEncoding/K982148c09ddb';
import { QueueingSubject } from 'queueing-subject';
import { Observable } from 'rxjs/Observable';
export declare function flatBLOB(v: any): BLOB<FlatEncoding>;
export declare function typedBLOB(v: any, t: zmFold<any>): TypedBLOB;
export interface Client<A> {
    onOpen: (send: (v: A) => void, close: () => void) => void;
    onError: () => void;
    onValue: (v: A) => void;
}
export declare function channel<A>(t: zmFold<A>): {
    inChan: Observable<A>;
    outChan: QueueingSubject<A>;
};
export declare class Channel<A> {
    constructor(t: zmFold<A>, client: Client<A>);
}
