// keyof 연산자

// interface Person {
//     name: string;
//     age: number;
// }

type Person = typeof person

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "차성욱",
    age: 28
}

getPropertyKey(person, "name");

