import React, { useEffect, useState } from 'react'

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
      토큰 : {token}
      <div>
        토큰 구매
        <input type="text" onChange={(e) => {setValue(e.target.value.trim())}}/>
        <button onClick={buyToken}>토큰 구매</button>
      </div>
      <div>유저 구매 목록</div>
      {
        products.map((el, index) => {
          return (
          <div>
            <div>이름 : {el.name}</div>
            <div>가격 : {el.etherPrice}</div>
            <div>이미지 : </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Mypage