export interface ILottoResponse {
    lottoArr : number[]
    message ? : string
}

export interface Lottery {
    lottery() : ILottoResponse
}

// 로또 추첨
export const lotto = (count : number) => {
    let resultArr : number[] = [];
    while (resultArr.length < count) {
        resultArr.push(Math.floor(Math.random() * 45) + 1);
        resultArr = Array.from(new Set(resultArr));
    }

    return resultArr;
}