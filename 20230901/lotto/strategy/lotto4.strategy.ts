import { ILottoResponse, Lottery, lotto } from "./lottery";

class Lotto4 implements Lottery {
    lottery(): ILottoResponse {
        const lottoArr = lotto(4);
        return { lottoArr, message : "4개의 로또 번호입니다."}
    }
}

export default Lotto4