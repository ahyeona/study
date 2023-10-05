import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Baseball.json"

const App = () => {
    const {user, web3} = useWeb3();
    const [ticket, setTicket] = useState("0");

    // 우리가 입력해서 매개변수로 요청할 값. 우리가 정할 정답
    const [value, setValue] = useState("");

    // 게임한 사람들이 얼마나 이더를 쌓아놨는지
    // 정답 맞추면 다 그사람 것
    const [reward, setReward] = useState("0");

    // 사람들이 게임을 몇 판이나 진행했는지
    const [progress, setProgress] = useState("0");

    // 컨트랙트 배포자만 알 수 있는 답
    const [random, setRandom] = useState("000");

    // 게임이 진행중인지 여부
    const [message, setMessage] = useState("");

    const [isOwner, setIsOwner] = useState(false);

    const [baseballContract, setBaseballContract] = useState(null);

    useEffect(()=>{
        if (web3 !== null) {
            if (baseballContract === null) {
                const Baseball = new web3.eth.Contract(abi, "0x7b2703D9aD1C2838Ddd5B52BB62DB562d70EBdB4", {data : ""});
                // Baseball.options.from = "0x0b557549fe731bd88262366434d8b00fbd53970e";
                // Baseball.options.from = user.account;
                setBaseballContract(Baseball);
            }
        }
    }, [web3]);

    const getTicket = async () => {
        if (baseballContract === null) return;
        const result = web3.utils.toBigInt(await baseballContract.methods.getTicketPrice().call()).toString(10);
        setTicket(await web3.utils.fromWei(result, "ether"));
    }

    const getReward = async () => {
        if (baseballContract === null) return;
        const result = web3.utils.toBigInt(await baseballContract.methods.getReward().call()).toString(10);
        setReward(await web3.utils.fromWei(result, "ether"));
    }

    const getPlaying = async () => {
        const playing = web3.utils.toBigInt(await baseballContract.methods.getPlaying().call()).toString(10);
        setMessage(playing);
    }

    const getProgress = async () => {
        const progress = web3.utils.toBigInt(await baseballContract.methods.getProgress().call()).toString(10);
        setProgress(progress);
    }

    const getRandom = async () => {
        if (isOwner == false) {
            alert("배포자 아님");
            return;
        }
        const random = web3.utils.toBigInt(await baseballContract.methods.getRandom().call({
            from : user.account
        })).toString(10);
        setRandom(random);
    }

    const gameStart = async () => {
        if (value.length < 3) {
            alert("숫자 3자리 입력");
            return;
        }
        await baseballContract.methods.gameStart(Number(value)).send({
            from : user.account,
            value : web3.utils.toWei("5", "ether")
        });

        render();
    }

    const restart = async () => {
        if (isOwner == false) {
            alert("배포자 아님");
            return;
        }
        await baseballContract.methods.restart().send({
            from : user.account
        });
        render();
    }

    const getOwner = async () => {
        const owner = await baseballContract.methods.getOwner().call({
            from : user.account
        });
        setIsOwner(owner);
    }

    const render = () => {
        getTicket();
        getReward();
        getPlaying();
        getProgress();
        getOwner();
    }

    useEffect(()=>{
        if (baseballContract !== null && user.account.length !== 0) {
            render();
        }
    }, [baseballContract, user]);

    // if (user.account === null) return "지갑 연결하세요.";
    if (user.account.length === 0) return "지갑 연결하세요.";

    return(
        <>
            <div>account : {user.account}</div>
            <div>티켓 가격 : {ticket}</div>
            <div>현재 게임 진행도 : {progress} / 5 </div>
            <div>총 상금 : {reward}</div>
            <div>진행중 ? : {message == 0 ? "진행중" : "게임 종료"}</div>
            <input onChange={(e)=>{setValue(e.target.value)}}></input>

            <div>정답 : {random}</div>
            <button onClick={gameStart}>게임 시작</button>
            <button onClick={restart}>재시작</button>
            <button onClick={getRandom}>어드민</button>
        </>
    )

}

export default App;