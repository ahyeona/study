// 로그인 페이지
// 복습

// 폴더를 나눠서
// 배포해서 프론트를 수정하면 프론트에만 푸쉬
// 백엔드를 수정하면 백엔드에만 푸쉬

// 프로젝트 관리
// 백엔드랑 프론트랑 나눠서 깃 레파지토리 파놓고 푸쉬

// express express-session cors sequelize mysql2 dotenv
// 프로젝트 시작 package.json
// 서버 대기 상태
// body 객체 사용

const express = require("express");
const cors = require("cors");
const dot = require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./models");
const loginRouter = require("./routers/login");
const signUpRouter = require("./routers/signup");
const boardRouter = require("./routers/board");

const app = express();
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

sequelize.sync({force : false}).then(()=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err);
});

app.use(express.urlencoded({extended:false}));

// 다른 도메인에서 악의적으로 접근할 수 없도록
// 도메인 접근 시 발생하는 보안 정책
// 다른 도메인과 통신을 안전하게 유지시키기 위해서 보안 정책 있음
// cors 모듈을 가지고 도메인을 허용해주자
// Access-control-Allow-origin을 헤더에 포함해서
// 접근을 허용하고 응답하고 브라우저에서 응답을 받은 뒤
// 헤더값을 확인해서 접근을 허용 또는 차단

// 미들웨어로 추가
app.use(cors({
    // 도메인 허용 옵션
    // 접근을 허용할 도메인
    // 여러 개의 도메인을 허용하고 싶으면 배열의 형태로
    origin : "http://127.0.0.1:5500",

    // 클라이언트의 요청에 쿠키를 포함할지 (true : 포함)
    credentials : true,
}));

// test
app.get("/", (req, res)=>{
    res.send("응답함");
});

app.use("/signUp",signUpRouter);
app.use("/login",loginRouter);
app.use("/boards",boardRouter);

// app.use("/");

app.listen(8000, ()=>{
    console.log("서버 열림");
});
