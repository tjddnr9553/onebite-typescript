// infer
// inference : 추론하다
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

// never
type C = ReturnType<number>


type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// T는 프로미스 타입이어야 함
// 프로미스 타입의 결과값 타입을 반환해야 함

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;

