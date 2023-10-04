import { useState, useEffect } from "react";
import Web3 from "web3";

// npm i web3

// 커스텀 훅 작성할 때 use를 붙여야 함
const useWeb3 = () => {
    // 현재 접속한 메타마스크 지갑 정보를 담을 변수
    const [user, setUser] = useState({
        account : "",
        balance : ""
    });

    // 네트워크와 연결한 web3 인스턴스를 담을 변수
    const [web3, setWeb3] = useState(null);

    useEffect(()=>{
        // 확장프로그램 메타마스크가 설치되어 있는지 확인
        // ethereum 객체가 있는지 확인
        if(window.ethereum) {
            // 로그인
            window.ethereum.request({
                method : "eth_requestAccounts",
                // 요청하고 응답받으면 반환받은 배열의 첫번째 값이 필요
                // 배열 구조분해 할당
            }).then(async ([data])=>{
                // Web3 인스턴스 생성
                const web3Provider = new Web3(window.ethereum);
                setWeb3(web3Provider);
                setUser({
                    account : data,
                    // web3Provider.utils.toWei 요청을 보내고
                    // 매개변수로
                    // await web3Provider.eth.getBalance(data) 현재 지갑의 잔액을 조회해서
                    // 조회한 단위는 wei단위
                    // ether 단위로 변경
                    balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data), "ether")
                });
            });
        } else {
            alert("메타마스크 설치");
        }

    }, []);


    return {
        user,
        web3
    }
}

export default useWeb3;