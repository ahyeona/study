import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBoard } from "../features/boardSlice";

const BoardInsert = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const result = useSelector((state) => state.post.result);

  useEffect(() => {
    if (result) {
        nav("/boardlist");
    }
  }, [result]);

  const postBtnEvent = () => {
    dispatch(
      postBoard({
        title: document.querySelector("#titleInput").value,
        content: document.querySelector("#contentInput").value,
      })
    );
  };

  return (
    <div>
      <div>
        <label>제목</label>
        <input type="text" id="titleInput" />
      </div>
      <div>
        <label>내용</label>
        <textarea name="" id="contentInput" cols="30" rows="10"></textarea>
      </div>
      <button onClick={postBtnEvent}>등록</button>
    </div>
  );
};

export default BoardInsert;
