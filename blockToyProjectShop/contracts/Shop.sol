// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "./node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ERC20.sol";

contract Shop is ERC20 {
    // owner없다면
    // address private owner;

    constructor() ERC20("ShopToken", "STK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
        owner = msg.sender;
    }

    // 상품
    struct Product {
        uint256 id;
        string name;
        uint256 price;
    }

    // // 유저
    // struct User {
    //     address account;
    // }

    // 상품 배열
    Product[] public products;

    // 상품 아이디
    uint256 productId = 0;

    // 계정 당 구매한 상품
    mapping(address => Product[]) private userProducts;

    // CA가 이더를 받았을때 실행될 함수
    receive() external payable {
        // 10이더를 보내면 5000토큰
        uint amount = msg.value * 500;

        // require(balanceOf(owner) >= amount);
        // // balanceOf(owner) -= amount;
        // // balanceOf(msg.sender) += amount;
        // _update(owner, msg.sender, amount);

        require(_balances[owner] >= amount);
        _balances[owner] -= amount;
        _balances[msg.sender] += amount;

        if (msg.sender == owner) {
            _mint(owner, amount);
        }
    }

    // 상품 목록 반환
    function getProducts() public view returns (Product[] memory) {
        return products;
    }

    // 특정 사용자가 구매한 상품 목록 반환
    function getUserProducts() public view returns (Product[] memory) {
        return userProducts[msg.sender];
    }

    // 상품 구매
    function buyProduct(uint256 id) public returns (bool) {
        Product memory product;

        // 상품의 가격 찾기
        for (uint256 i=0; i < products.length; i++) {
            if (products[i].id == id) {
                product = products[i];
                break;
            }
        }

        // 돈 없으면 구매 불가
        require(balanceOf(msg.sender) >= product.price);

        // 유저 토큰 감소
        _balances[msg.sender] -= product.price;
        // 전체 발행량 감소
        _totalSupply -= product.price;

        // _update(msg.sender, owner, product.price);

        // 해당 유저 구매 목록에 추가
        userProducts[msg.sender].push(product);

        return true;
    }

    // 상품 등록
    function registerProduct(string memory _name, uint256 _price) public returns (bool) {
        // require(msg.sender == owner);
        uint256 price = _price * (10 ** decimals());
        products.push(Product(productId, _name, price));
        productId += 1;

        return true;
    }

}