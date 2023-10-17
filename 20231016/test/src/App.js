import { useEffect, useState } from "react";
import axios from "axios";
import Web3 from "web3";
import { pinata_api_key, pinata_secret_api_key } from "./api";

const App = () => {
  const [file, setFile] = useState(null);
  const [tokens, setTokens] = useState([]);

  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");

  const [user, setUser] = useState({
    account: "",
    balance: ""
  });
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);


  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(async ([data]) => {
        const webProvider = new Web3(window.ethereum);

        setUser({
          account: data,
          balance: webProvider.utils.fromWei(await webProvider.eth.getBalance(data), "ether")
        });

        setWeb3(webProvider);
      });
    } else {
      alert("메타마스크 설치해주세요.");
    }
  }, []);

  useEffect(()=>{
    if (web3 == null) return;
    const abi = [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "ERC721IncorrectOwner",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ERC721InsufficientApproval",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "approver",
					"type": "address"
				}
			],
			"name": "ERC721InvalidApprover",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "ERC721InvalidOperator",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "ERC721InvalidOwner",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				}
			],
			"name": "ERC721InvalidReceiver",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}
			],
			"name": "ERC721InvalidSender",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ERC721NonexistentToken",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getTokens",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "jsonHash",
					"type": "string"
				}
			],
			"name": "minting",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
    // const c = new web3.eth.Contract(abi, "0x0869e5D61d9e7e5b3dc3482e7CfBeE86E2Ee07F3", {data : ""});
    const c = new web3.eth.Contract(abi, "0x99f318cA68230F014bae9D8e684cF8D3699b2F08", {data : ""});
    setContract(c);
  }, [web3]);


  const upload = async () => {
    const fileData = new FormData();
    // 이미지 업로드
    fileData.append("file", file);
    const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key,
          pinata_secret_api_key,
        }
      });

    console.log(resp);
    console.log(resp.data.IpfsHash);

    const file2 = JSON.stringify({
      "name" : name,
      "description" : describe,
      "image" : "https://apricot-wrong-platypus-336.mypinata.cloud/ipfs/" + resp.data.IpfsHash,
      "attributes" : []
    });

    const fileData2 = new FormData();
    const blob = new Blob([file2], { type: 'application/json' });
    fileData2.append("file", blob);

    const resp2 = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData2,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key,
          pinata_secret_api_key,
        }
      });

    console.log("resp2 : ",resp2.data);
    console.log("resp2 IpfsHash : ",resp2.data.IpfsHash);

    if (user.account == "" || contract == null) return;
    console.log("sdfsdf", typeof(resp.data.IpfsHash), typeof(resp2.data.IpfsHash));
    const d = await contract.methods.minting(resp2.data.IpfsHash).send({
      from : user.account
    });

    console.log("d : ",d);

    // mint함수 실행해서 민팅


    // 리액트 페이지에 본인의 NFT 내용도 같이 보여주기

    // 본인이 가지고 있는 tokenId를 조회해서
    // tokenURI 함수를 실행시키면 ipfs json의 경로가 뜨고
    // json의 값을 요청보내서 가져오면 nft의 내용이 포함되어 있음
    // 화면에 뿌려주기

  }

  const getTokens = async () => {
	const data = await contract.methods.getTokens().call({
		from : user.account
	});

	const tokens = await Promise.all(data.map(async (el, index) => {
		const {data} = await axios.get(`https://apricot-wrong-platypus-336.mypinata.cloud/ipfs/${el}`);
		console.log(data);
		return data;
	}));
	setTokens(tokens);
  }

  useEffect(()=>{
	console.log("tokens",tokens);
  }, [tokens]);

  return (
    <>
      <label>IPFS에 파일 업로드</label>
      <label>이름</label>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />
      <label>설명</label>
      <input type="text" onChange={(e) => { setDescribe(e.target.value) }} />

      <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
      <button onClick={upload}>파일 업로드</button>

	  <div>
		<button onClick={getTokens}>유저 토큰</button>
		{
			tokens.map((el,index)=>{
				return (
				<div>
					이름 : {el.name} <br />
					설명 : {el.description} <br />
					<img width={"100px"} src={el.image}/>
				</div>
				)
			})
		}
	  </div>
    </>
  )
}

export default App;

// 지금은 ERC 배포할 때 하나의 json으로 배포하고 있음
// 같은 내용으로 NFT를 발행하고 있음
// react에서 파일을 생성해서 IPFS에 업로드하고
// 객체 만들기 전에 이미지 먼저 올리고 해시 주소 가지고
// NFT 이름, 설명, 이미지(해시 주소)로 json 파일 만들어서 IPFS에 업로드하고 민팅

// 새로운 NFT 민팅
