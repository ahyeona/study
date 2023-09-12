import Block from "@core/block/block";
import P2P from "./p2p";
import express, {Express, Request, Response} from "express";
import os from "os";
import cors from "cors";
import path from "path";
// npm i express
// npm i -D @types/express
// npm i cors
// npm i -D @types/cors

const app : Express = express();
const ws : P2P = new P2P();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/chains", (req : Request, res : Response) => {
    res.json(ws.get());
});

app.post("/block/mine", (req : Request, res : Response) => {
    // 블록에 기록할 내용을 받고
    const {data} : {data : Array<string>} = req.body;
    const newBlock : Block | null = Block.generateBlock(ws.latestBlock(), data, ws.getAdjustmentBlock());
    if (newBlock === null) res.send("error");

    ws.addToChain(newBlock);
    res.json(newBlock);
});

// post 작성했었는데 get으로 바꿀 것.
// 오타 이슈 본인 v4 확인도 귀찮으니까
app.get("/peer/add", (req : Request, res : Response) => {
    const networkinterface = os.networkInterfaces();
    let v4 : string;
    for (const key in networkinterface) {
        const Array = networkinterface[key];
        for (const value of Array) {
            if (!value.internal && value.family === "IPv4") {
                v4 = value.address;
                // v4 ip 주소
            }
        }
    }

    ws.addToPeer(`ws://${v4}:7545`);
    res.end();
});

app.get("/peer", (req : Request, res : Response) => {
    const sockets = ws.getSockets();
    res.json(sockets);
});

app.listen(8080, () => {
    console.log("server on");
    ws.listen(7545);
});

// npx ts-node src/core/server/index.ts

// 네트워크 보안/고급설정/인바운드규칙/새규칙/특정포트접근 가능(8080)/

// ipconfig에서 ipv4주소