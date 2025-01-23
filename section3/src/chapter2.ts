// Unknown 타입
function unknownExam() {
    // 업 캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = undefined;
    let e: unknown = null;

    let unknownVar: unknown;
    // 다운 캐스팅
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

// Never 타입
function neverExam() {
    // 반환할 수 있는게 없음
    function neverFunc(): never {
        while (true) {
        }
    }

    // 업 캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운 캐스팅(에러 발생)
    // let never1: never = 1;
    // let never2: never = 'hello';
    // let never3: never = true;
}

// void 타입
function voidExam() {
    // 반환할 수 있는 값이 없음
    function voidFunc(): void {
        console.log("hi");
    }

    // 업 캐스팅
    let voidVar: void = undefined;
}

// any 타입
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: unknown;
    let neverVar: never;

    // 다운 캐스팅(에러 발생되지 않음)
    anyVar = unknownVar;
    undefinedVar = anyVar;

    // never 타입은 어떠한 캐스팅도 될 수 없음
    // neverVar = anyVar;
    // anyVar = neverVar;
}
