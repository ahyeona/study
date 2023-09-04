import { ILottoResponse, Lottery, lotto } from "./lottery";

class Lotto12 implements Lottery {
    lottery(): ILottoResponse {
        const lottoArr = lotto(12);
        return { lottoArr, message : "12개의 로또 번호입니다."}
    }
}

export default Lotto12