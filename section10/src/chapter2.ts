// Pick<T, K>
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumnailURL?: string;
}

// K를 T의 서브타입으로 제한
type Pick<T, K extends keyof T> = { [key in K]: T[key] };

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "예전 글",
    content: "예전 글 내용",
}


// Omit<T, K>
// 객체 타입으로부터 특정 프로퍼티만 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">
// Pick<Post, Exclude<"title" | "tags" |"content" | "thumnailURL" , "title">
// Pick<Post, "tags" |"content" | "thumnailURL">

const noTitlePost: Omit<Post, "title"> = {
    tags: [],
    content: "",
    thumnailURL: "",
}


// Record<K, V>

type Record<K extends keyof any, V> = { [key in K]: V }

type Thumnail = Record<"large" | "medium" | "small" | "watch", { url: string; size: number; }>;
