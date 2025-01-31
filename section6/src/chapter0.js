// 클래스
let studentA = {
    name: "cha",
    grade: "A",
    age: 28,
    study() {
        console.log("공부중");
    },
    introduce() {
        console.log("안녕")
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("공부중입니다");
    }

    introduce() {
        console.log(`${this.name}입니다`)
    }
}

// 상속을 통한 클래스 정의
class StudentDeveloper extends Student {
    // 추가 필드
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
        // 부모 클래스의 생성자에게 맡김
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 추가 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`)
    }
}

let studentDeveloper = new StudentDeveloper("차차", "A+", 30, "javascript");
console.log(studentDeveloper);

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
let studentB = new Student("차차", "A+", 30);
studentB.study();
studentB.introduce();
