import { Wallet } from "@core/wallet";
import Block from "@core/block/block";
import Chain from "@core/chain/chain";
import { GENESIS } from "@core/config";
import Transaction from "@core/transaction/transaction";
import Unspent from "@core/transaction/unspent";


describe("전체 흐름 이해", ()=>{
    it("test", ()=>{

        // 1. 한 개의 지갑을 생성
        const wallet = new Wallet();
        console.log(wallet.account);
        

        // 2. 지갑 주소로 블록을 생성(마이닝)
        const chain = new Chain();

        const block = Block.generateBlock(GENESIS, [wallet.account], GENESIS);
        console.log(block);

        // 3. 블록의 채굴 보상을 이 지갑이 받고(코인베이스 트랜잭션 블록에 추가)
        const transaction = new Transaction();
        const coinBase = transaction.createCoinbase(wallet.account, block.height);
        console.log(coinBase);

        // 4. UTXO 채굴자 지갑의 계정과 블록 채굴 보상
        const unspent = new Unspent();


        // 5. 새로운 지갑을 하나 더 만들어서

        // 6. 채굴보상을 받은 지갑에서 새로운 지갑으로 돈을 송금하는 트랜잭션을 발생

        // 7. 서명이 유효한지 검증을 거치고 발생한 트랜잭션을 트랜잭션 풀에 담아놓고

        // 8. 새로운 지갑이 블록 마이닝해서(코인베이스 트랜잭션 추가) (트랜잭션 풀에 있는 트랜잭션을 처리)

        // 9. UTXO에 처음 만든 지갑이 전송한 잔액이 새로운 지갑에 잔액으로 미사용 객체가 추가될 수 있게



        console.log(transaction.getPool());
    });


    // it("1. 지갑 생성", ()=>{
    //     const wallet = new Wallet();
    //     console.log(wallet.account);
    // });

    // it("2. 지갑 주소로 블록 생성", () => {

    // });

    // it("3. 블록의 채굴 보상 받기", () => {

    // });

    // it("4. UTXO 채굴자 지갑의 계정과 블록 채굴 보상", () => {

    // });

    // it("5. 새로운 지갑 생성", () => {

    // });

    // it("6. 채굴보상을 받은 지갑에서 새로운 지갑으로 돈을 송금하는 트랜잭션 발생", () => {

    // });






});