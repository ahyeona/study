import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Pokemon.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const [token, setToken] = useState("0");

  const [accounts, setAccounts] = useState([]);

  useEffect(()=>{
    if (web3 !== null) {
      if (contract) return;
      const pokemon = new web3.eth.Contract(abi, "0x6df9523BC5c3e0D4f473ef80b0Fa2Af27A0df1De", {data : ""});
      setContract(pokemon);
    }
  },[web3]);

  // 해당 지갑의 포켓몬 조회
  const getPokemon = async (account) => {
    const result = contract.methods.getPokemon().call({
      from : account
    });
    return result;
  }

  // 지갑의 토큰량 조회
  const getToken = async (account) => {
    if (!contract) return;
    let result = web3.utils.toBigInt(await contract.methods.balanceOf(account).call()).toString(10);
    result = await web3.utils.fromWei(result, "ether");
    return result;
  }

  // 메타마스크 계정들 조회
  const getAccounts = async () => {
    const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
    const _accounts = await Promise.all(
      accounts.map(async (account) => {
        const token = await getToken(account);
        const pokemon = await getPokemon(account);
        // 추가로 포켓몬들도 어떤 포켓몬을 가지고 있는지 추가할 부분
        return {account, token, pokemon};
      })
    );

    setAccounts(_accounts);
  }

  // 1. 포켓몬 랜덤으로 뽑을 수 있는 함수들을 만들고(버튼)
  // 2. 포켓몬 한 번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고 있는지 보여주기
  // 3. 포켓몬 소유권 넘길 수 있는 함수 만들기
  // 4. 

  useEffect(()=>{
    if (!contract) return;
    getAccounts();
  }, [contract]);


  if (user.account === null) return "지갑 연결하세요";

  return (
    <>
      <div>토큰 보유량 : {token} </div>
      {accounts.map((item, index) => (
        <div key={index}>
          계정 {item.account} : 토큰 값 : {item.token}
          <div>포켓몬들<br />
            {item.pokemon.map((item, index) => (
              <div key={index}>
                {item.name} : <img width={50} src={item.url} alt="이미지"/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default App;