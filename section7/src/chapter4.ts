// 제네릭 클래스
class List<T> {
    constructor(private list: T[]) {
    }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

let numList = new List([1, 2, 3]);
numList.pop();
numList.push(4);
numList.print();

let strList = new List(["hi", "world"]);
strList.pop();
strList.push("hello");
strList.print();
