// 제네릭 인터페이스
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
}

// 인덱스 시그니쳐
interface indexSignature {
    [key: string]: number;
}

let indexSignature: indexSignature = {
    key: 1,
    key2: 321321,
    key3: -31231
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value"
}

let booleanMap: Map<boolean> = {
    key: true,
}


// 제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
}

let map2: Map2<string> = {
    key: "hello",
}


// 제네릭 인터페이스의 활용 예시
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
    name: "차성욱",
    profile: {
        type: "developer",
        skill: "Typescript"
    },
}

const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "인하공전"
    }
}
