import LottoService from "./service/lotto.service"
import { ILottoRequest } from "./interfaces/lotto.request"
import { ILottoResponse } from "./strategy/lottery"

class LottoController {
    constructor(private readonly lottoService: LottoService) {}

    lottery(request : ILottoRequest) : ILottoResponse {
        const {count} = request;
        return this.lottoService.lottery(count);
    }
}

export default LottoController