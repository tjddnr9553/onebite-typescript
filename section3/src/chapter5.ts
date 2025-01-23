// 타입 추론
let a = 10;
let b = "hello";

// 객체
let c = {
    id: 1,
    name: "차성욱",
    profile: {
        nickname: "cha",
    }
}
let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// 암묵적 any 타입
let d; // any 타입
d = 10; // number 타입으로 진화
d.toFixed();

d = "hello"; // string 타입으로 진화
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "hello", true];
