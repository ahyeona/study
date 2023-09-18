export interface Result<R> {
    isError : false;
    value : R; // 원하는 타입을 받는 것
}

export interface Failure<E> {
    isError : true;
    value : E;
}

// Result있으면 Result, 없으면 Failure
export type Failable<R, E> = Result<R> | Failure<E>;

