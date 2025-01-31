// 접근 제어자(Access Modifier)
// public private protected

class Employee {
    // 생성자에 접근 제어자를 작성하면 자동으로 필드를 생성하고 초기화까지 진행함
    constructor(private name: string, protected age: number, public position: string) {
    }

    // 메서드
    work(): void {
        console.log(`${this.name} 일 하는중`);
    }
}

// 파생 클래스
class ExecutiveOffice extends Employee {
    // 필드
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    func() {
        this.age;
        // this.name;
    }
}

const employee = new Employee("차성욱", 28, "developer");
// employee.name = "홍길동";
// employee.age = 1;
employee.position = "디자이너";
console.log(employee);
