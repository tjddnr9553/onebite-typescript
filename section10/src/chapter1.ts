// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumnailURL?: string;
}

// 직접 구현
type Partial<T> = { [key in keyof T]?: T[key] };

const draft: Partial<Post> = {
    title: "초안 제목",
    content: "초안",
}


// Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// 직접 구현
type Required<T> = { [key in keyof T]-?: T[key]; }

const withThumnailPost: Required<Post> = {
    title: "한 입 TS",
    tags: ["ts"],
    content: "초안",
    thumnailURL: ""
}


// Readonly<T>
// 특정 객체 타입의 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입

// 직접 구현
type Readonly<T> = { readonly [key in keyof T]: T[key]; }

const readonlyPost: Readonly<Post> = {
    title: "보호될 게시글",
    tags: [],
    content: "",
}

// readonlyPost.title = "수정";
