import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBoard,
  editBoard,
  deleteBoard,
  editInit,
} from "../features/boardSlice";

const BoardDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const dispatch = useDispatch();
  const board = useSelector((state) => state.detail.board);
  const isWriter = useSelector((state) => state.detail.isWriter);
  const editResult = useSelector((state) => state.edit.result);
  const delResult = useSelector((state) => state.delete.result);

  useEffect(() => {
    dispatch(getBoard({ id }));
  }, []);

  useEffect(() => {
    if (editResult || delResult) {
      nav("/boardlist");
    }
  }, [editResult, delResult]);

  const editBtnEvent = () => {
    dispatch(
      editBoard({
        id,
        title: document.querySelector("#titleInput").value,
        content: document.querySelector("#contentInput").value,
      })
    );
  };

  const delBtnEvent = () => {
    dispatch(deleteBoard({ id }));
  };

  if (board.id != id) {
    return <div>로딩</div>;
  }

  return (
    <>
      <div>
        <label>제목</label>
        <input type="text" id="titleInput" defaultValue={board.title} />
      </div>
      <div>
        <label>내용</label>
        <textarea
          name=""
          id="contentInput"
          defaultValue={board.content}
          cols="30"
          rows="10"
        ></textarea>
      </div>

      {isWriter ? (
        <div>
          <button onClick={editBtnEvent}>수정</button>
          <button onClick={delBtnEvent}>삭제</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BoardDetail;
