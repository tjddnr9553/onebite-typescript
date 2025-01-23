// 타입 단언
type Person = {
    name: string;
    age: number;
}
let person = {} as Person;
person.name = "John";
person.age = 2;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "",
    color: "green",
    breed: "",
} as Dog

// 타입 단언의 규칙
// 단언식 : 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나, A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언(좋은 방법은 아님)
let num3 = 10 as unknown as string;


// const 단언
let num4 = 10 as const;

// 모든 프로퍼티가 readonly가 됨
let cat = {
    name: "cat",
    color: "green",
} as const

// Non Null 단언(!)
type Post = {
    title: string,
    author?: string,
}

let post: Post = {
    title: "게시글",
    author: "차성욱"
}

const len: number = post.author!.length;
