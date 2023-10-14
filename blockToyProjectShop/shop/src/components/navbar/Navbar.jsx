import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavDiv } from "./navbar.styled";

const Navbar = () => {
    const nav = useNavigate();

    return (
        <NavDiv>
            <div onClick={() => { nav("/"); }}>목록</div>
            <div onClick={() => { nav("/insert"); }}>등록</div>
            <div onClick={() => { nav("/mypage"); }}>마이페이지</div>
        </NavDiv>
    )
}

export default Navbar