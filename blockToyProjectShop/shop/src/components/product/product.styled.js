import styled from "styled-components";

export const BuyBtn = styled.button`
    width: 100px;
    height: 60px;
    border-radius: 20%;
    background-color: aliceblue;
`
export const TextUl = styled.ul`
    list-style: none;

    & span {
        font-size: 18px;
        font-weight: bold;
    }
`

export const ProductDiv = styled.div`
    width: fit-content;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    border: 2px solid black;
    border-radius: 20px;

    & ${TextUl} {
        width : 200px;
        align-self: center;
    }

    & img {
        width: 300px;
    }

    & ${BuyBtn} {
        align-self: center;
    }
`
