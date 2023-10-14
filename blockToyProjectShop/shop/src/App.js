import './App.css';
import { Routes, Route } from "react-router-dom";
import useWeb3 from "./hooks/web3.hook";
import { List, Insert, Mypage } from './pages';
import { useEffect, useState } from 'react';
import abi from "./abi/Shop.json";
import Navbar from './components/navbar/Navbar';

function App() {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const CA = "0xE63Ce00582f9C4b7106ac42784900734C002101D";

  useEffect(()=>{
    if (web3 !== null) {
      if (contract) return;
      const shop = new web3.eth.Contract(abi, CA, {data : ""});
      setContract(shop);
    }
  }, [web3]);


  if (user.account == "") {
    return <div>메타마스크 로그인하세요.</div>
  }

  if (!contract || !web3) {
    return <div>로딩중</div>
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<List user = {user} web3 = {web3} contract = {contract} />} />
        <Route path='/insert' element={<Insert user = {user} web3 = {web3} contract = {contract} />} />
        <Route path='/mypage' element={<Mypage user = {user} web3 = {web3} contract = {contract} CA = {CA} />} />
      </Routes>
    </div>
  );
}

export default App;
