import './App.css';
import {produce} from "immer";
import {add, remove, add2, remove2, temp} from "./features/countSlice"
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const num = useSelector(state=>state.count.num);
  const num2 = useSelector(state=>state.count2.num);
  const value = useSelector(state=>state.count2.value);

  // const state = {
  //   value : 0,
  //   arr : []
  // }

  // // 값이 변해도 (컴포넌트에서?) 바뀐 것을 감지하지 못하기 때문에
  // // 불변성을 지킨다라는 내용이
  // // 기존 값을 직접 수정하지 않고 새로운 값을 만들어 내는 것
  // const nextState = produce(state, dra => {
  //   console.log(dra);
  //   dra.value += 1;
  //   dra.arr.push("a");
  // });

  // // 기존 객체
  // console.log("state",state);
  // // 새로운 객체
  // console.log("nextState",nextState);

  // 기존 객체를 유지하고 새로운 값을 생성해서 반환해줌

  // 이전에 이런식으로 작성했었음
  // {...state, value : state.value + 1}
  // 카운트 기능 하나 만들기
  return (
    <div className="App">
      <div>
        숫자1 : {num}
        <button onClick={()=>{dispatch(add())}}>더하기</button>
        <button onClick={()=>{dispatch(remove())}}>빼기</button>
      </div>
      <div>
        로딩 완료 여부 : {value}<br />
        숫자2 : {num2}
        <button onClick={()=>{dispatch(temp("seoul"))}}>날씨 정보</button>
        <button onClick={()=>{dispatch(add2())}}>더하기</button>
        <button onClick={()=>{dispatch(remove2())}}>빼기</button>
      </div>
    </div>
  );
}

export default App;

// 데이터의 불변성을 지키면서 (state 안변함) 새로운 값 만들어서 수정해서 사용할 수 있음??