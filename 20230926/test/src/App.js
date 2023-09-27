import './App.css';
import Web3 from 'web3';
import { useEffect, useState } from "react";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [ca, setCa] = useState(null);
  const [contractCode, setContractCode] = useState(null);

// const abi = [
//   {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
//   {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"draw","outputs":[],"stateMutability":"nonpayable","type":"function"},
//   {"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"findNumber","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
//   {"inputs":[],"name":"getLottoArr","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
//   {"inputs":[],"name":"getLottoHistory","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},
//   {"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
//   {"inputs":[],"name":"setLottoArr","outputs":[],"stateMutability":"nonpayable","type":"function"},
//   {"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}
// ]

const abi = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"draw","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"findNumber","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getLottoArr","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getLottoHistory","outputs":[{"internalType":"uint256[][]","name":"","type":"uint256[][]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"setLottoArr","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}
]


  useEffect(()=>{
    (async ()=>{
      const data = await window.ethereum.request({
        method : "eth_requestAccounts"
      });
      console.log(data);
      setWeb3(new Web3(window.ethereum));
      setAccount(data[0]);
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
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[6], []);
    const data = await web3.eth.sendTransaction({
      from : account,
      to : ca,
      data : codeHash,
      gas : 5000000,
      gasPrice : 200000000,
    });

    console.log("data :", data);
  }

  // 결과 보기
  const getResult = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[3], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    console.log("data",data);

    const dataArray = data.slice(2).match(/.{1,64}/g); // 16진수 문자열을 64자리 단위로
    const lottoArr = dataArray.map(hexValue => parseInt(hexValue, 16).toString());

    document.querySelector('.lottoResult').innerHTML = "<ul>";
    for (let i = 0; i < 6; i++) {
      document.querySelector('.lottoResult').innerHTML += `<li>${lottoArr[lottoArr.length - 1 - i]}</li>`;
    }
    document.querySelector('.lottoResult').innerHTML += "</ul>";

    console.log("lottoArr", lottoArr);
  }

  // 추첨 내역 보기
  const getHistory = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[4], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    const dataArray = data.slice(2).match(/.{1,64}/g); // 16진수 문자열을 64자리 단위로
    const lottoHistory = [];

    for (let i = 0; i < dataArray.length; i++) {
        const hexValue = dataArray[i];
        const decimalValue = parseInt(hexValue).toString(10);
        lottoHistory.push(decimalValue);
    }

    const doubleArray = [];
    for (let i = 0; i < lottoHistory.length; i += 6) {
        const subArray = lottoHistory.slice(i, i + 6);
        doubleArray.push(subArray);
    }

    console.log("Lotto History:", doubleArray);

  }

  const getValue = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[5], []);

    const data = await web3.eth.call({
      to : ca,
      data : codeHash
    });

    console.log("getvalue data ", data);
  }

  const setValue = async () => {
    const codeHash = await web3.eth.abi.encodeFunctionCall(abi[7], [4]);

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

      <div className='lottoResult'></div>
      <div>
        <button onClick={getValue}>value보기</button>
        <button onClick={setValue}>value설정</button>

      </div>
    </div>
  );
}

export default App;
