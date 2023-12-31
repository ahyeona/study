import React, { useState } from 'react'
import axios from '../Axios';
import { useNavigate } from 'react-router-dom';

// 상품 등록
const Insert = ({user, web3, contract}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);

    const nav = useNavigate();

    // 상품 등록하는 함수
    const registerProduct = async () => {
        const data = await contract.methods.registerProduct(name, price).send({
            from : user.account
        });

        const formData = new FormData();
        formData.append("blockNumber", data.blockNumber);
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

        if (data.status == 1) {
            alert("등록이 완료되었습니다.");
            nav("/");
        } else {
            alert("등록 실패");
        }
    }

    return (
        <div>
            <h1>상품 등록</h1>
            <h4 style={{color: "red"}}>배포자만 등록 가능</h4>
            <label>이름</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br />
            <label>가격</label>
            <input type="text" onChange={(e)=>{setPrice(e.target.value)}}/><br />
            <label>이미지</label>
            <input type="file" onChange={(e)=>{console.log(e.target.files[0]); setImg(e.target.files[0])}}/><br />
            <button onClick={registerProduct}>등록</button>
        </div>
    )
}

export default Insert