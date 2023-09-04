import { ILottoResponse } from "../strategy/lottery";
import { Strategy } from "../strategy/strategy";

class LottoService {
    constructor(private readonly strategy : Strategy) {}

    lottery(count : number) : ILottoResponse {
        return this.strategy.lottery(count)
    }
}

export default LottoService