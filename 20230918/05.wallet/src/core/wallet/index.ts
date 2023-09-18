import { randomBytes } from "crypto";
import elliptic from "elliptic";
import { SHA256 } from "crypto-js";
import fs from "fs";
import path from "path";

// 지갑 클래스 만들고 페이지에서 지갑 생성을 한 번 확인해보기

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1");

// 기본 지갑 정보 저장 경로
const dir = path.join(__dirname, "../../data");

// 지갑 클래스 정의
export class Wallet {
    public account : string;
    public privateKey : string;
    public publicKey : string;
    public balance : number;

    constructor(privateKey : string = "") {
        // 생성 단계에서 개인키 값이 없으면 만들어 넣자
        this.privateKey = privateKey || this.getPrivateKey();
        this.publicKey = this.getPublicKey();
        this.account = this.getAccount();
        this.balance = 0;

        if (privateKey == "")
        Wallet.createWallet(this);
    }

    static createWallet(myWallet : Wallet) {
        // fs 모듈로 파일 생성
        // 지갑을 생성하면 주소를 저장할 것
        // 주소 안에는 개인키 넣어보기
        const filename = path.join(dir, myWallet.account);
        const filecontent = myWallet.privateKey;
        fs.writeFileSync(filename, filecontent);
    }

    static getWalletList() : string[] {
        // readdirSync : 폴더를 읽어서 안에 있는 파일 이름을 문자열로 가져온다.
        const files : string[] = fs.readdirSync(dir);
        return files;
    }

    // data 폴더에서 해당하는 지갑 주소를 찾아서 반환
    static getWalletPrivateKey(account : string) : string {
        const filename = path.join(dir, account);
        // 파일 읽어오기
        const filecontent = fs.readFileSync(filename);
        return filecontent.toString();
    }

    public getPrivateKey() : string {
        return randomBytes(32).toString("hex");
    }

    public getPublicKey() : string {
        // 개인키로 공개키를 만들자
        const keyPair = ec.keyFromPrivate(this.privateKey);
        return keyPair.getPublic().encode("hex", false);
    }

    public getAccount() : string {
        return `0x${this.publicKey.slice(26).toString()}`;
    }

}



