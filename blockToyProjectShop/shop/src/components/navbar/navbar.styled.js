import styled from "styled-components";

export const NavDiv = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 100px;

    & div {
        cursor: pointer;
        width: 100px;
        height: 40px;
        background-color: aliceblue;
        border-radius: 10%;
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`