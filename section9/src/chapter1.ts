// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 분산적 조건부 타입
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>
// string | number

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>
// number | string | number
// number | string


// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>
// never는 유니온 타입으로 묶으면 사라짐
// number | never | boolean
// number | boolean


type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// Extract<number, string> | Extract<string, string> | Extract<boolean, string>
// never | string | never
// string


// 분산 방지할 때에는 []로 감싸서 사용
type Protect<T, U> = [T] extends [number] ? T : never;
