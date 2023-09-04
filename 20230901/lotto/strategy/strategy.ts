import { Lottery } from "./lottery"
import { ILottoResponse } from "./lottery"

export interface IStrategy {
    [key : number] : Lottery
}

export class Strategy {
    private strategy : IStrategy = {}

    public set(key: number, lottery : Lottery) {
        this.strategy[key] = lottery;
    }

    public lottery(count : number) : ILottoResponse {
        return this.strategy[count].lottery();
    }
}