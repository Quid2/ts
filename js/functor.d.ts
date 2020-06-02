import { ZM } from '../lib/core';
declare module '../ADT/ADT/K3e8257255cbf' {
    interface ADT<A extends ZM, B extends ZM, C extends ZM> {
        map<T extends ZM>(f: (x: C) => T): ADT<A, B, T>;
    }
}
declare module '../ADT/Type/K7028aa556ebc' {
    interface TypeCon<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): Type<B>;
    }
    interface TypeApp<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): Type<B>;
    }
}
declare module '../ADT/ConTree/K86653e040025' {
    interface Con<A extends ZM, B extends ZM> {
        map<T extends ZM>(f: (x: B) => T): ConTree<A, T>;
    }
    interface _ConTree<A extends ZM, B extends ZM> {
        map<T extends ZM>(f: (x: B) => T): ConTree<A, T>;
    }
}
declare module '../ADT/List/Kb8cd13187198' {
    interface Nil<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): List<B>;
    }
    interface Cons<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): List<B>;
    }
}
declare module '../ADT/Maybe/Kda6836778fd4' {
    interface Nothing<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): Maybe<B>;
    }
    interface Just<A extends ZM> {
        map<B extends ZM>(f: (x: A) => B): Maybe<B>;
    }
}
declare module '../ADT/Either/K6260e465ae74' {
    interface Left<A extends ZM, B extends ZM> {
        map<T extends ZM>(f: (x: B) => T): Either<A, T>;
    }
    interface Right<A extends ZM, B extends ZM> {
        map<T extends ZM>(f: (x: B) => T): Either<A, T>;
    }
}
declare module '../ADT/Tuple2/Ka5583bf3ad34' {
    interface Tuple2<A extends ZM, B extends ZM> {
        map<T extends ZM>(f: (x: B) => T): Tuple2<A, T>;
    }
}
