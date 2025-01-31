// 인터페이스
interface Person {
    readonly name: string;
    age?: number;

    // 호출 시그니처(오버로드)
    sayHi(): void;

    sayHi(a: number, b: number): void;
}

const person: Person = {
    name: "차성욱",
    sayHi() {
        console.log("hi");
    }
}


