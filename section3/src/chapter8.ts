// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
}
type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}
type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;

// Admin : {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member : {name}님 현재까지 {point}모았습니다.
// Guest : {name}님 현재까지 {visitCount}번 방문하셨습니다.

function login(user: User) {
    switch (user.tag) {
        case "ADMIN":
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        case "GUEST":
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
    }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state: "loading";
}

type FailedTask = {
    state: "failed";
    error: { message: string };
}

type SuccessTask = {
    state: "success";
    response: { data: string };
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(asyncTask: AsyncTask) {
    switch (asyncTask.state) {
        case "loading":
            console.log("로딩중입니다.");
            break;
        case "failed":
            console.log(asyncTask.error.message);
            break;
        case "success":
            console.log(asyncTask.response.data);
            break;
    }
}

const loading: AsyncTask = {
    state: "loading"
}
const failed: AsyncTask = {
    state: "failed",
    error: {
        message: "오류 발생 원인은 ~"
    }
}
const success: AsyncTask = {
    state: "success",
    response: {
        data: "데이터 ~"
    }
}
