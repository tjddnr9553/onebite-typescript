// 맵드 타입
interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    return {
        id: 1,
        name: "John",
        age: 28
    }
}

const user = fetchUser();
// user.id = 2;

function updateUser(user: User) {
    return {}
}

updateUser({id: 1, name: "차성욱", age: 27});
