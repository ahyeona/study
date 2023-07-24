import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dupChk, signUp } from "../features/userSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const dupChkText = useSelector((state) => state.dupchk.value);
  const dupChkBool = useSelector((state) => state.dupchk.dup);

  // 중복확인
  const dupBtnEvent = () => {
    dispatch(dupChk(document.querySelector("#userIdInput").value));
  };

  // 회원가입
  const signUpBtnEvent = () => {
    if (dupChkBool) {
      // 중복확인 완료
      dispatch(
        signUp({
          user_id: document.querySelector("#userIdInput").value,
          user_pw: document.querySelector("#userPwInput").value,
        })
      );
    } else {
      // 중복확인에서 통과 못함
      window.alert("아이디 중복확인 해주세요.");
      return;
    }
  };

  return (
    <div>
      <div>
        <label>아이디</label>
        <input id="userIdInput" type="text" />
        <span>{dupChkText}</span>
        <button onClick={dupBtnEvent}>중복확인</button>
      </div>
      <div>
        <label>비밀번호</label>
        <input id="userPwInput" type="password" />
      </div>

      <button onClick={signUpBtnEvent}>회원가입</button>
    </div>
  );
};

export default Signup;
