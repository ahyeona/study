import React from 'react'
import { BuyBtn, TextUl, ProductDiv } from "./product.styled";

const Product = ({el, buyProduct=false}) => {

  return (
    <ProductDiv>
        <TextUl>
            <li>이름 : <span>{el.name}</span></li>
            <li>가격 : <span>{el.etherPrice}</span></li>
        </TextUl>
        <img src={el.img}/>
        {buyProduct ? (<BuyBtn onClick={()=>{buyProduct(el.id)}}>구매</BuyBtn>) : (<></>)}
    </ProductDiv>
  )
}

export default Product