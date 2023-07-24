import React, { useEffect } from "react";
import { login } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const loginState = useSelector((state) => state.login.result);
  const loginText = useSelector((state) => state.login.value);

  useEffect(() => {
    if (loginState) {
      nav("/boardlist");
    }
  }, [loginState]);

  const loginBtnEvent = () => {
    dispatch(
      login({
        user_id: document.querySelector("#userIdInput").value,
        user_pw: document.querySelector("#userPwInput").value,
      })
    );
  };

  return (
    <div>
      <div>
        <label>아이디</label>
        <input id="userIdInput" type="text" />
      </div>
      <div>
        <label>비밀번호</label>
        <input id="userPwInput" type="password" />
      </div>
      <span>{loginText}</span>
      <button onClick={loginBtnEvent}>로그인</button>
    </div>
  );
};

export default Login;
