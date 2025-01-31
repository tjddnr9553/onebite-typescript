interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 다중 확장 가능
interface DogCat extends Dog, Cat {}

const dog: Dog = {
    name: "dog",
    age: 0,
    isBark: false,
}

const dogCat : DogCat ={
    name: "dogCat",
    age: 0,
    isBark: false,
    isScratch: false,
}
