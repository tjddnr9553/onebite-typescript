// 함수 타입의 호환성 : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 업 캐스팅(반환값 기준)
a = b;
// 다운 캐스팅(반환값 기준)
// b = a;

// 기준2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {
};
let d: D = (value) => {
};

// 업 캐스팅(매개변수 기준)
// c = d;
// 다운 캐스팅(매개변수 기준)
d = c;

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}


// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b)=>{};
let func2: Func2 = (a)=>{};

func1 = func2;
// 할당하고자 하는 함수의 매개변수의 개수가 더 작아야 함
// func2 = func1;
