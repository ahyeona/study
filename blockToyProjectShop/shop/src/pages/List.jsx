import React, { useEffect, useState } from 'react'
import axios from "../Axios";

// 상품 목록
const List = ({ user, web3, contract }) => {
  const [products, setProducts] = useState(null);

  // 상품 구매 함수
  const buyProduct = async (id) => {
    if (!window.confirm("구매하시겠습니까?")) return;
    const data = await contract.methods.buyProduct(id).send({
      from: user.account
    });
  }

  // 등록된 상품 목록 받아오는 함수
  const getProducts = async () => {
    const data = await contract.methods.getProducts().call();

    const _products = await Promise.all(
      data.map(async (el, index) => {
        let product = {...el};
        product.etherPrice = await web3.utils.fromWei(el.price, "ether");
        // let url = await axios.get(`/getImg/${el.id}`);
        // product.img = await axios.get(`/img/${url}`);
        return product;
      })
    )

    setProducts(_products);
  }



  useEffect(() => {
    if (products==null) {
      getProducts();
    }
  }, []);

  if (products == null) return "dksehla";


  return (
    <div>
      {
        products.map((el, index) => {
          return (
          <div>
            <div>이름 : {el.name}</div>
            {/* <div>가격 : {await web3.utils.fromWei(el.price, "ether")}</div> */}
            <div>가격 : {el.etherPrice}</div>
            {/* <div>이미지 : <img src={el.img}/></div> */}
            <button onClick={() => { buyProduct(el.id) }}>구매</button>
          </div>
          )
        })
    }
    </div>
  )
}

export default List