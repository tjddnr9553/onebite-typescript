// 프로미스

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
        reject("~ 때문에 실패");
    }, 3000);
})

promise.then((response) => {
    console.log(response * 10);
})

promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    }
})


// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                content: "내용"
            });
        }, 3000);
    })
}

const postRequest = fetchPost();

postRequest.then((response) => {
    response.id;
})
