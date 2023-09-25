import { useEffect, useState } from 'react';
import './App.css';
import Web3 from 'web3';

function App() {
  // 브라우저에서 이더리움 블록체인 상호작용
  // 브라우저에서 메타마스크 확장 프로그램을 통해 네트워크에 상호작용을 할 수 있음
  // 외부 소유 계정 정보를 가지고 있다. 네트워크의 정보도 가지고 있다.
  // 트랜잭션을 발생시키면 서명의 정보가 필요한데 개인키를 직접 전달하는 것이 아니고
  // 메타마스크 안에 안전하게 보관되어있다.

  // 원격 프로시저 호출을 통해 컨트랙트의 함수를 실행시킬 수 있고
  // 네트워크의 메서드도 사용해서 계정의 정보나 등등 로직을 사용할 수 있다.

  // 데이터베이스를 가지고 로그인 구현을 하면
  // 아이디 비밀번호 입력해서 중앙화 데이터베이스에 값이 저장되고 있고

  // 사용자가 로그인했을때 프로세스를
  // 지갑 로그인으로 가져간다. (탈중앙화된 어플리케이션 로그인 처리 방식)
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(0);
  const [ca, setCa] = useState(null);
  const [count, setCount] = useState(null);

  const abi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "getValue", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }], name: "setValue", outputs: [], stateMutability: "nonpayable", type: "function" },
  ];

  // npm i web3

  useEffect(() => {
    (async () => {
      // 배열의 구조분해 할당
      // window
      const [data] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(data);
      // 0x35bf335fef91e0ac59799850e59e598301dbc040
      // 현재 연결한 지갑의 주소
      // 네트워크 web3 연결
      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const balanceBtn = async () => {
    const balance = await web3.eth.getBalance(account);
    const _balance = await web3.utils.fromWei(balance, "ether");
    console.log(_balance)
    setBalance(_balance);
  }

  // 카운트앱
  // 스마트 컨트랙트 배포
  const sendTransaction = async () => {
    console.log("account", account);
    console.log("contract", document.querySelector("#contract").value);
    const ca = await web3.eth.sendTransaction({
      from: account,
      gas: "3000000",
      data: document.querySelector("#contract").value,
    });
    console.log("ca", ca.contractAddress);
    setCa(ca.contractAddress);
  }

  const getCount = async () => {
    const getCodeHash = await web3.eth.abi.encodeFunctionCall(abi[1], []);
    const data = await web3.eth.call({
      to: ca,
      data: getCodeHash
    });
    console.log("data : ", data)
    console.log("ca :", ca)
    console.log("getCodeHash : ", getCodeHash)

    // const result = await web3.utils.toBN(data).toString(10);
    const result = parseInt(data.toString(10));

    setCount(result);
    console.log(result);
    return result;
  }


  const setCountUpDown = async (decrease) => {
    const count = await getCount();
    let value;
    if (decrease == true) {
      value = count - 1;
    } else {
      value = count + 1;
    }
    console.log("value", value)
    const setCodeHash = await web3.eth.abi.encodeFunctionCall(abi[2], [value]);
    const data = await web3.eth.sendTransaction({
      from: account,
      to: ca,
      data: setCodeHash,
      gas: 500000,
      gasPrice: 200000000,
    });
    console.log(data);
    getCount();
  }


  // 트랜잭션 EOA -> EOA
  // 잔액 송금해보는 버튼
  const sendAmount = async () => {
    const data = await web3.eth.sendTransaction({
      from: account,
      to: document.querySelector("#otherAccount").value,
      value: await web3.utils.toWei(document.querySelector("#amount").value, "ether")
    });
    console.log("data", data);
  }

  return (
    <div className="App">
      {/* 지갑의 내용을 가지고 계정 조회 */}
      {account || "로그인"}<br />
      {balance}ETH<br />
      <button onClick={balanceBtn}>잔액 조회</button>

      <div>
        <textarea id='contract'></textarea>
        <button onClick={sendTransaction}>컨트랙트 배포</button>

        <div>
          count : {count}
          <button onClick={getCount}>조회</button>
          <button onClick={() => { setCountUpDown(true) }}>감소</button>
          <button onClick={() => { setCountUpDown(false) }}>증가</button>
        </div>
      </div>

      <div>
        <label>value</label>
        <input id='amount'></input>
        <label>account</label>
        <input id='otherAccount'></input>
        <button onClick={sendAmount}>송금</button>
      </div>
    </div>
  );
}

export default App;
