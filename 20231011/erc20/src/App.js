import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Pokemon.json";

const App = () => {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const [token, setToken] = useState("0");

  const [accounts, setAccounts] = useState([]);
  const [tokenPrice, setTokenPrice] = useState(0);

  const [userPokemons, setUserPokemons] = useState([]);
  const [sendAccount, setSendAccount] = useState("");
  const [sendPokemonName, setSendPokemonName] = useState("");

  const CA = "0x8dA617778a8A528Fe8059Eb0B8F65066247b781c";

  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      const pokemon = new web3.eth.Contract(abi, CA, { data: "" });
      setContract(pokemon);
    }
  }, [web3]);

  // 해당 지갑의 포켓몬 조회
  const getPokemon = async (account) => {
    const result = contract.methods.getPokemon().call({
      from: account
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

  const getAccounts = async () => {
    // 메타마스크 계정들 조회
    // const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    // const _accounts = await Promise.all(
    //   accounts.map(async (account) => {
    //     const token = await getToken(account);
    //     if (account == user.account) {
    //       setToken(token);
    //     }
    //     const pokemon = await getPokemon(account);
    //     // 추가로 포켓몬들도 어떤 포켓몬을 가지고 있는지 추가할 부분
    //     return { account, token, pokemon };
    //   })
    // );

    // setAccounts(_accounts);


    // 포켓몬 산 적 있는 계정들 조회
    const accounts = await contract.methods.getPokemonUsers().call();
    const _accounts = await Promise.all(
      accounts.map(async ({account}) => {
        const token = await getToken(account);
        const pokemon = await getPokemon(account);
        if (account == user.account) {
          setToken(token);
        }
        return { account, token, pokemon };
      })
    );

    setAccounts(_accounts);

    setUserPokemons(await getPokemon(user.account));
  }

  useEffect(() => {
    if (!contract) return;
    getAccounts();
    getTokenPrice();
  }, [contract]);

  useEffect(()=>{
    console.log("sendPokemonName", sendPokemonName);
  }, [sendPokemonName]);

  // 포켓몬 뽑기
  const buyPokemon = async () => {
    // if (token < tokenPrice) {
    //  alert("돈 없음");
        // return;
    // }
    await contract.methods.buyPokemon().send({
      from : user.account
    });
    getAccounts();
  }

  // 가격 불러오기
  const getTokenPrice = async () => {
    let result = web3.utils.toBigInt(await contract.methods.getTokenPrice().call()).toString(10);
    result = await web3.utils.fromWei(result, "ether");
    setTokenPrice(result);
  }

  // 포켓몬 이전
  const sendPokemon = async () => {
    if (sendPokemonName.length == "") {
      alert("포켓몬 선택하세요");
      return;
    }

    await contract.methods.sendPokemon(sendAccount, sendPokemonName).send({
      from : user.account
    });

    getAccounts();
  }


  if (user.account === null) return "지갑 연결하세요";

  return (
    <>
      <div>지갑 : {user.account} </div>
      <div>토큰 보유량 : {token} </div>
      <button onClick={buyPokemon}>포켓몬 뽑기 ({tokenPrice}토큰)</button>
      <div>
        <div>
          <b>포켓몬 보내기</b>
        </div>
        <label>보낼 지갑 : </label>
        <input onChange={(e)=>{setSendAccount(e.target.value)}}/>
        <select onChange={(e)=>{
          setSendPokemonName(e.target.options[e.target.selectedIndex].value)
          }}>
            <option value={""}>포켓몬 선택</option>
          {userPokemons.map((el, index)=>(
            <option key={index} value={el.name}>{el.name}</option>
          ))}
        </select>

        <button onClick={sendPokemon}>보내기</button>
      </div>
      {accounts.map((item, index) => (
        <div key={index}>
          계정 {item.account} : 토큰 값 : {item.token}
          <div>포켓몬들<br />
            {item.pokemon.map((item, index) => (
              <div key={index}>
                {item.name} : <img width={50} src={item.url} alt="이미지" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default App;

// 과제
// 1. 포켓몬 랜덤으로 뽑을 수 있는 함수들을 만들고(버튼)
// 2. 포켓몬 한 번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고 있는지 보여주기
// 3. 포켓몬 소유권 넘길 수 있는 함수 만들기

// 4. 포켓몬 대전
// 5. 보상 개념 추가해도 되고