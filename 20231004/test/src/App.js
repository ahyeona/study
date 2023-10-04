import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Counter.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [count, setCount] = useState(0);

  // CA 컨트랙트 주소의 상태변수를 조회하는 함수를 작성
  const getCount = () => {
    // web3 있는지 확인
    if(web3 === null) return;

    // find 배열을 순회하면서 값을 찾는데
    // 순회하는 요소는 객체
    // 순회하는 요소 객체에 name키가 getValue인지 확인하고 맞으면 return
    const getValueData = abi.find((data)=> data?.name === "getValue");

    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    // data 실행시킬 내용이 담겨있음
    // 원격 프로시저 호출
    web3.eth.call({
      to : "0x520a392C7222AACf0402812A29bB99FC98D8c81a",
      data
    }).then((data)=>{
      // toBN 큰 자리수의 값을 다루기 때문에
      // 16진수에서 10진수로 변경
      // const result = web3.utils.toBigInt(data).toString(10);
      const result = parseInt(data, 16); // 16->10진수
      setCount(result);
      console.log(result);
    });
  }

  // 값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
  const increment = async () => {
    const incrementData = abi.find((data)=>data.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);

    // 접속한 지갑의 주소
    // useWeb3 hook에서 지갑의 정보를 받아왔음
    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from : from,
      to : "0x520a392C7222AACf0402812A29bB99FC98D8c81a",
      data
    });
    console.log(_data);
    getCount();
  }

  // 값을 감소시키는 함수
  const decrement = async () => {
    const decrementData = abi.find((data)=>data.name === "decrement");
    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);

    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from,
      to : "0x520a392C7222AACf0402812A29bB99FC98D8c81a",
      data
    });

    console.log(_data);
    getCount();
  }

  useEffect(()=>{
    // 최초 값 조회
    if(web3 !== null) getCount();
  }, [web3]);

  if (user.account === "") return "지갑 로그인 하세요.";

  return (
    <>
      <div>
        <div>{user.account}</div>
        <h2>카운트 : {count}</h2>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
    </>
  )
}

export default App;