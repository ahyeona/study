import './App.css';
import Web3 from 'web3';
import { useEffect, useState } from "react";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [ca, setCa] = useState(null);
  const [contractCode, setContractCode] = useState(null);

//   const abi = [
//     {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
//     {"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"findNumber","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"getLottoArr","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"getLottoHistory","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"setLottoArr","outputs":[],"stateMutability":"nonpayable","type":"function"}
// ]

//   const abi = [
//     {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
//     {"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"findNumber","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"getLottoArr","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"getLottoHistory","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
//     {"inputs":[],"name":"setLottoArr","outputs":[],"stateMutability":"nonpayable","type":"function"},
//     {"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}
// ]


const abi = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"findNumber","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getLottoArr","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getLottoHistory","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"setLottoArr","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}
]

  useEffect(()=>{
    (async ()=>{
      const [data] = await window.ethereum.request({
        method : "eth_requestAccounts"
      });

      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const setContract = (e) => {
    setContractCode(e.target.value.trim());
  }

  // 컨트랙트 배포
  const deployContract = async () => {
    window.alert("배포");
    const ca = await web3.eth.sendTransaction({
      from : account,
      gas : "3000000",
      data : contractCode
      // data : ""
    });

    console.log("ca :",ca);
    setCa(ca.contractAddress);
  }

  // 로또 추첨
  const draw = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[5], []);
    // const codeHash = await web3.eth.abi.encodeFunctionCall(abi[4], []);
    console.log("codeHash", codeHash);
    console.log("account", account);
    console.log("ca", ca);
    const data = await web3.eth.sendTransaction({
      from : account,
      to : ca,
      data : codeHash,
      gas : 500000000,
      gasPrice : 20000000000,
    });

    console.log("data :", data);
  }

  // 결과 보기
  const getResult = async () => {
    console.log("결과 보기");

    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[2], []);
    // const codeHash = await web3.eth.abi.encodeFunctionCall(abi[2], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    console.log("data",data);

    const lottoArrStr = web3.utils.hexToAscii(data);
    console.log("lottoArrStr", lottoArrStr);
    const lottoArr = JSON.parse(lottoArrStr);
    console.log("Lotto Array:", lottoArr);


  }

  // 추첨 내역 보기
  const getHistory = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[3], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    console.log(data);

    // const result = await web3.utils.toBN(data).toString(10);
    const lottoHistoryStr = web3.utils.hexToAscii(data);
    const lottoHistory = JSON.parse(lottoHistoryStr);
    console.log("Lotto History:", lottoHistory);

  }

  const getValue = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[4], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    console.log("getvalue data ", data);
  }

  const setValue = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[6], [4]);

    const data = await web3.eth.sendTransaction({
      from : account,
      to : ca,
      data : codeHash,
      gas : 5000000,
      gasPrice : 200000000,
    });
    console.log("setValue data ", data);

  }


  return (
    <div className="App">
      {account || "로그인하세요."}
      <textarea onChange={setContract}></textarea>
      <button onClick={deployContract}>컨트랙트 배포</button>
      <button onClick={draw}>로또 추첨</button>
      <button onClick={getResult}>결과 보기</button>
      <button onClick={getHistory}>이전 결과 보기</button>

      <div>
        <button onClick={getValue}>value보기</button>
        <button onClick={setValue}>value설정</button>

      </div>
    </div>
  );
}

export default App;
