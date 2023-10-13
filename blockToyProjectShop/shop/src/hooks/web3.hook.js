import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
    const [user, setUser] = useState({
        account : "",
        balance : ""
    });

    const [web3, setWeb3] = useState(null);

    useEffect(()=>{
        if (window.ethereum) {
            window.ethereum.request({ method : "eth_requestAccounts" }).then(async([data]) => {
                const webProvider = new Web3(window.ethereum);

                setUser({
                    account : data,
                    balance : webProvider.utils.fromWei(await webProvider.eth.getBalance(data), "ether")
                });

                setWeb3(webProvider);
            });
        } else {
            alert("메타마스크 설치해주세요.");
        }
    }, []);

    return { user, web3 };
}

export default useWeb3;