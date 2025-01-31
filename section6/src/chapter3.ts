// 인터페이스와 클래스
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // 인터페이스의 필드는 모두 public으로 정의되어야 함
    constructor(public name: string, public moveSpeed: number) {
    }

    move() {
        console.log(`${this.moveSpeed} moved`);
    }
}
