// enum 타입 : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST
}

enum Language {
    korean = 'ko',
    english = 'en',
}

const user1 = {
    name: "차성욱",
    role: Role.ADMIN,
    language: Language.korean,
}

const user2 = {
    name: "홍길동",
    role: Role.USER,
    language: Language.korean,
}

const user3 = {
    name: "아무개",
    role: Role.GUEST,
    language: Language.english,
}
