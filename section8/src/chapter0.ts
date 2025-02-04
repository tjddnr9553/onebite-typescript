// 인덱스드 엑세스 타입
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    }
}[]

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

const post: PostList[number] = {
    title: "제목",
    content: "내용",
    author: {
        id: 1,
        name: "차성욱",
        age: 28
    }
}


type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

// 최적의 타입 => 유니온 타입
type Tup3 = Tup[number];
