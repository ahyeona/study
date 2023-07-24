import React, { useEffect } from "react";
import { getList } from "../features/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BoardList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const list = useSelector((state) => state.list.list);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const goDetail = (id) => {
    nav("/boarddetail/" + id);
  };

  const loop = () => {
    if (list.length == 0) return "글 없음";
    let arr = [];
    list.forEach((element) => {
      arr.push(
        <ul
          onClick={() => {
            goDetail(element.id);
          }}
        >
          <li>{element.title}</li>
        </ul>
      );
    });
    return arr;
  };

  return <div>{loop()}</div>;
};

export default BoardList;
