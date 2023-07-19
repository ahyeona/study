// 이미지 업로드
// 서버측 컴퓨터의 폴더에 이미지 파일 저장
// 파일의 경로를 설정하고 서버측에서 이미지 파일을 가져와서 보여준다.

// express path multer
// multer 모듈을 사용해서 이미지 업로드할 것.
// 파일이 저장될 경로나 파일의 확장자, 이름 등을 설정해서 파일 저장

// 프로젝트 시작 package.json
// 모듈 설치
// 서버 대기 상태

const dot = require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const uploadRouter = require("./routers/upload");
const signupRouter = require("./routers/signup");
const loginRouter = require("./routers/login");
const mypageRouter = require("./routers/mypage");
const {isLogin} =require("./mid/isLogin");
const path = require("path");
const {sequelize} = require("./models");
const app = express();

// npm i cors
// cors 도메인 허용하기 위해서
app.use(cors({
    origin: "http://127.0.0.1:5500",

    // 요청에서 쿠키를 포함시킬지 여부
    credentials: true,
}));

app.use(session({
    secret : process.env.SESSION_KEY,
    saveUninitialized : false,
    resave : false
}))

sequelize.sync({force : false}).then(()=>{
    console.log("연결 성공");
}).catch((err)=>{
    console.log(err);
});

// body 객체 사용할지
app.use(express.urlencoded({extended:false}));
// 정적 파일 경로 추가했던 것처럼
// 폴더명까지 경로
app.use("/img", express.static(path.join(__dirname, "uploads")));

// 요청과 응답에서 json 형식의 데이터를 전달받았을 때
// 요청과 응답에서 json 파싱해서 자바스크립트 객체로 변환시켜주는 미들웨어
// json 메서드로 json 파싱
app.use(express.json());
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/upload", isLogin, uploadRouter);
// app.use("/upload", uploadRouter);
app.use("/mypage", isLogin, mypageRouter);



app.listen(8000, ()=>{
    console.log("서버 열림");
});
