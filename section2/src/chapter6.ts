// any : 특정 변수의 타입을 우리가 확실히 모를떄
let anyVar: any = 10;

anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {
};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;


// Unknown
let unknownVar: unknown;
unknownVar = "hello";
unknownVar = true;
unknownVar = {};

if (typeof unknownVar === "number") {
    num = unknownVar;
}

// num = unknownVar;
// unknownVar.toUpperCase();
