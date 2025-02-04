// 제네릭

// 제네릭 함수
// <T> : 타입을 담는 변수
function func<T>(value: T): T {
    return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");
