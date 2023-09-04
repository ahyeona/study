import { ILottoResponse, Lottery, lotto } from "./lottery";

class Lotto8 implements Lottery {
    lottery(): ILottoResponse {
        const lottoArr = lotto(8);
        return { lottoArr, message : "8개의 로또 번호입니다."}
    }
}

export default Lotto8