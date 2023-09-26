// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Lotto {
    uint256[][] lottoHistory;
    uint256[] lottoArr;
    uint256 value;

    constructor() {
        lottoArr = new uint256[](0);
        lottoHistory = new uint256[][](0);
    }

    function getValue() public view returns(uint256) {
        return value;
    }

    function setValue(uint256 _value) public{
        value = _value;
    }

    // 추첨 결과 반환
    function getLottoArr() public view returns(uint256[] memory) {
        return lottoArr;
    }

    // 전체 추첨 결과 반환
    function getLottoHistory() public view returns(uint256[][] memory) {
        return lottoHistory;
    }

    // 해당 배열 안에 숫자가 포함되어있는지 확인
    function findNumber(uint256 num) public view returns(bool) {
        // 중복 방지를 위해 해당 숫자가 이미 배열안에 포함되어 있는지 찾음
            for (uint256 i = 0; i < lottoArr.length; i++) {
                if (lottoArr[i] == num) {
                    return true;
                }
            }
            return false;
    }

    // 로또 추첨
    function draw(uint256 count) public {
        for (uint256 i = 0; i < count; i++) {
            uint256 randNonce = i; // randNonce를 각 반복마다 증가
            uint256 num = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNonce))) % 45;
            num++;

            // 중복 확인
            bool dup = findNumber(num);

            if (dup == false) {
                lottoArr.push(num);
            }
        }

    }

    // 추첨
    function setLottoArr() public {
        // lottoArr = new uint256[](0);

        // draw(6);

        // if (lottoArr.length < 6) {
        //     draw(6 - lottoArr.length);
        // }

        // lottoHistory[lottoHistory.length - 1] = lottoArr;

        uint256[] memory newLottoArr = new uint256[](0);

        draw(6);

        if (newLottoArr.length < 6) {
            draw(6 - newLottoArr.length);
        }

        lottoHistory.push(newLottoArr);
        }
}


