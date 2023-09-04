import { ILottoResponse, Lottery, lotto } from "./lottery";

class Lotto6 implements Lottery {
    lottery(): ILottoResponse {
        const lottoArr = lotto(6);
        return { lottoArr, message : "6개의 로또 번호입니다."}
    }
}

export default Lotto6