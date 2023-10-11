// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Pokemon is ERC20 {
    constructor() ERC20("Pokemon", "PTK", 100000) {}

    // 포켓몬 객체를 만들 것
    // 이 객체 하나가 포켓몬의 데이터

    struct Pokes {
        string url;
        string name;
    }

    // 포켓몬 빵 구매한 사람들의 주소를 담아놓을 것
    struct Users {
        address account;
    }

    // ERC20 토큰을 지불해서 포켓몬 빵을 하나 사는 것
    // 빵 하나에 얼마?
    // 단위를 이더로 지정 10**18 소수점 단위
    // 가격이 1000 토큰
    uint256 private tokenPrice = 1000 ether;

    // 우리가 포켓몬 빵을 사면 랜덤한 스티커가 들어있는데
    // 배열 안에 나올 수 있는 포켓몬의 이름을 선언해두자
    // 한글을 사용하려면 유니코드 작성해야함
    // 영어로 작성
    string[] pokemonName = ["Pikachu", "Kobuk", "Charmander"];

    // 포켓몬 이쁜 이미지를 담아놓을 배열
    string[] pokemonUrl = [
        "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/200px-Pok%C3%A9mon_Pikachu_art.png",
        "https://static.wikia.nocookie.net/pokemon/images/a/aa/%EA%BC%AC%EB%B6%80%EA%B8%B0_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170404233452&path-prefix=ko",
        "https://static.wikia.nocookie.net/pokemon/images/5/5e/%ED%8C%8C%EC%9D%B4%EB%A6%AC_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest/scale-to-width-down/1200?cb=20170404233005&path-prefix=ko"
    ];

    // 구매하면 한 개를 얻는데
    // 또 사면 두 개
    mapping(address => Pokes[]) public pokemons;
    // {
    //     "0x234243" : [Pokes{url :"", name : ""}, Pokes{url :"", name : ""}, ]
    // }

    // 한 번이라도 포켓몬 빵을 구매한 사람들의 주소
    Users[] public users;

    // 지갑 주소가 가지고 있는 포켓몬 조회
    function getPokemon() public view returns (Pokes[] memory) {
        return pokemons[msg.sender];
    }

    function getPokemonUsers() public view returns (Users[] memory) {
        return users;
    }

    function buyPokemon() public {
        require(balances[msg.sender] >= tokenPrice);
        balances[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.coinbase, block.number)
            )
        );

        random = uint(random % 3); // 0~2까지 3가지의 랜덤값
        // Pokes 구조체 형태로 객체를 만들어서 배열에 푸쉬
        pokemons[msg.sender].push(
            Pokes(pokemonUrl[random], pokemonName[random])
        );

        // 유저가 포켓몬빵을 한 번 산 적이 있는지
        bool isUser = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].account == msg.sender) {
                isUser = true;
                break;
            }
        }

        if (!isUser) {
            users.push(Users(msg.sender));
        }
    }

    function getTokenPrice() external view returns (uint256) {
        return tokenPrice;
    }

    function removePokemon(uint256 index) internal {
        for (uint256 i = index; i < pokemons[msg.sender].length - 1; i++) {
            pokemons[msg.sender][i] = pokemons[msg.sender][i+1];
        }
        pokemons[msg.sender].pop();
    }

    function sendPokemon(address to, string memory _name) external returns (bool) {
        bool isUser = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].account == to) {
                isUser = true;
                break;
            }
        }

        if (!isUser) {
            users.push(Users(to));
        }

        for (uint256 i = 0; i < pokemons[msg.sender].length; i++) {
            if (keccak256(abi.encodePacked(pokemons[msg.sender][i].name)) == keccak256(abi.encodePacked(_name))) {
                pokemons[to].push(pokemons[msg.sender][i]);
                removePokemon(i);
                break;
            }
        }
        return true;
    }
}
