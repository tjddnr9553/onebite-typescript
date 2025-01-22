// 타입 별칭
type User = {
    id?: number, name: string, nickname: string, birthdate: string, bio: string
}

let user: User = {
    id: 1,
    name: '차성욱',
    nickname: 'ckckck',
    birthdate: '2021-07-07',
    bio: '안녕하세요'
}


// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string
}

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
    [key: string]: number | string
    // Korea 프로퍼티는 반드시 필요함
    Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: "840",
    UnitedKingdom: 826,
}
