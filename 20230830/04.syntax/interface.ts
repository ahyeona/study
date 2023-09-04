// interface는 객체의 구조를 정의하는 "타입"

interface IBlock {
    id : number
    title : string
    content : string
    date : number
    like : number

    // 객체의 구조에서 hit가 없어도 가능
    hit? : number
}

const Block : IBlock = {
    id : 1,
    title : "title",
    content : "content",
    date : 1,
    like : 1,
    hit : 0
}

const Block2 : IBlock = {
    id : 1,
    title : "title",
    content : "content",
    date : 1,
    like : 1
}

// 추상
// interface
// class 상속 받기

// implements
// implements 키워드는 class 구조가 만족하는지 여부 체크(name, price가 있어야 함?)
// interface IProduct {
//     name : string
//     price? : number
// }
// class product implements IProduct {
//     name : string
//     // price : number
//     constructor(name : string, price : number) {
//         this.name = name;
//         // this.price = price;
//     }
// }