import React, { useState } from 'react'
import axios from '../Axios';

// 상품 등록
const Insert = ({user, web3, contract}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);

    // 상품 등록하는 함수
    const registerProduct = async () => {
        const data = await contract.methods.registerProduct(name, price).send({
            from : user.account
        });

        console.log(data);
        console.log(img);

        const formData = new FormData();
        formData.append("blockHash", data.blockNumber);
        formData.append("upload", img);

        // 블록 해시, 이미지 전송
        await axios.post("/product/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              }
        });

        setName("");
        setPrice("");
        setImg(null);
    }

    return (
        <div>
            상품 등록<br />
            <label>이름</label><br />
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br />
            <label>가격</label><br />
            <input type="text" onChange={(e)=>{setPrice(e.target.value)}}/><br />
            <label>이미지</label><br />
            <input type="file" onChange={(e)=>{console.log(e.target.files[0]); setImg(e.target.files[0])}}/><br />
            <button onClick={registerProduct}>등록</button>
        </div>
    )
}

export default Insert