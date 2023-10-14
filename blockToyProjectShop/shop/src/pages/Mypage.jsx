import React, { useEffect, useState } from 'react'
import axios from "../Axios";
import Product from '../components/product/Product';

const Mypage = ({user, web3, contract, CA}) => {

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);
  const [token, setToken] = useState(0);

  // 유저가 구매한 상품 목록
  const getUserProducts = async () => {
    const products = await contract.methods.getUserProducts().call({
      from : user.account
    });

    const _products = await Promise.all(
      products.map(async (el, index) => {
        let product = {...el};
        product.etherPrice = await web3.utils.fromWei(el.price, "ether");
        const { data } = await axios.post(`/product/getImg`, {blockNumber : await web3.utils.toBigInt(el.id).toString(10)});
        product.img = `http://localhost:8080/imgs/${data}`;
        return product;
      })
      )

    setProducts(_products);
  }

  // 토큰 구매
  const buyToken = async () => {
    const _value = await web3.utils.toWei(value, "ether");
    await web3.eth.sendTransaction({
      from : user.account,
      to : CA,
      value : _value
    });

    getToken();
  }

  // 유저 토큰 받아오기
  const getToken = async () => {
    let data = await contract.methods.balanceOf(user.account).call();
    data = await web3.utils.fromWei(data, "ether");
    setToken(data);
  }

  useEffect(()=>{
    getUserProducts();
    getToken();
  }, []);

  return (
    <div>
      <h1>마이페이지</h1>
      <h4>유저 : {user.account}</h4>
      <h4>토큰 : {token}</h4>
      <h4>잔액 : {user.balance}</h4>
      <div>
        <h2>토큰 구매</h2>
        <input type="text" style={{width : "100px"}} placeholder='이더 금액 입력' onChange={(e) => {setValue(e.target.value.trim())}}/>ether<br/>
        <button onClick={buyToken}>{value * 500} 토큰 구매</button>
      </div>
      <h2>유저 구매 목록</h2>
      {
        products.map((el, index) => {
          return (
            <Product el={el} buyProduct={false} />
          )
        })
      }
    </div>
  )
}

export default Mypage