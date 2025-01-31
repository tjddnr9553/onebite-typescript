// 타입스크립트 클래스
const employee = {
    name: "차성욱",
    age: 28,
    position: "developer",
    work() {
        console.log("일 하는중");
    }
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work(): void {
        console.log("일 하는중");
    }
}

class ExecutiveOffice extends Employee {
    // 필드
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("차성욱", 28, "개발자");
console.log(employeeB);

// 클래스는 타입으로 활용 가능 -> 구조적 타입 시스템이기 때문에 가능
const employeeC: Employee = {
    name: "차성욱",
    age: 28,
    position: "developer",
    work() {
        console.log("일 하는중");
    }
}
