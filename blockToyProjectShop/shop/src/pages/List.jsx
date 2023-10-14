import React, { useEffect, useState } from 'react'
import axios from "../Axios";
import { useNavigate } from 'react-router-dom';
import Product from '../components/product/Product';

// 상품 목록
const List = ({ user, web3, contract }) => {
  const [products, setProducts] = useState(null);
  const nav = useNavigate();

  // 상품 구매 함수
  const buyProduct = async (id) => {
    if (!window.confirm("구매하시겠습니까?")) return;
    const data = await contract.methods.buyProduct(id).send({
      from: user.account
    });

    if (data.status == 1) {
      alert("구매가 완료되었습니다.");
      nav("/mypage");
    } else {
      alert("구매 실패");
    }
  }

  // 등록된 상품 목록 받아오는 함수
  const getProducts = async () => {
    const data = await contract.methods.getProducts().call();

    const _products = await Promise.all(
      data.map(async (el, index) => {
        let product = {...el};
        product.etherPrice = await web3.utils.fromWei(el.price, "ether");
        const { data } = await axios.post(`/product/getImg`, {blockNumber : await web3.utils.toBigInt(el.id).toString(10)});
        product.img = `http://localhost:8080/imgs/${data}`;
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

  if (products == null) return "로딩중";


  return (
    <div>
      <h1>상품 목록</h1>
      {
        products.map((el, index) => {
          return (
            <Product el={el} buyProduct={buyProduct} />
          )
        })
    }
    </div>
  )
}

export default List