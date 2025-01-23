// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

// 업 캐스팅
num1 = num2;

// 객체 타입 간의 호환성 : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
// 슈퍼 타입
type Animal = {
    name: string,
    color: string
}

// 서브 타입
type Dog = {
    name: string,
    color: string,
    breed: string
}

let animal: Animal = {
    name: "기린",
    color: "yellow",
}

let dog: Dog = {
    name: "몽이",
    color: "brown",
    breed: "시츄"
}

animal = dog;
// dog = animal;

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string,
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입',
    price: 33000,
    skill: 'react'
}
book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사 : 객체 리터럴을 사용해 초기화하는 과정에서 프로퍼티를 검사하는 과정
type Book = {
    name: string,
    price: number,
}

let book2: Book = {
    name: '한 입',
    price: 33000,
    // skill: 'react'
};

function func(book: Book){};
func({
    name: '한 입',
    price: 33000,
    // skill: 'react'
})
