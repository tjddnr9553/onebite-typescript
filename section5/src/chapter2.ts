// 선언 합침(Declaration Merging)
interface Person {
    name: string,
}

interface Person {
    name: string,   // 겹치는 경우 합쳐지는 인터페이스와 동일한 타입이어야 함
    age: number;
}

interface Developer extends Person {
    name: "hello"
}

const person: Person = {
    name: "John",
    age: 10,
}

// 모듈 보강
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib = {
    a: 1,
    b: 2,
    c: "hello"
}
