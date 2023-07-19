// npm init -y
// npm i express dotenv bcrypt express-session jsonwebtoken mysql2 sequelize

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { sequelize } = require("./models");
const session = require("express-session");
const { isLogin } = require("./middleware/isLogin");

const {
  loginRouter,
  signUpRouter,
  postRouter,
  mypageRouter,
} = require("./routers");

const PORT = 8080;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(express.json());

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/login", loginRouter);
app.use("/signup", signUpRouter);
app.use("/post", isLogin, postRouter);
app.use("/mypage", isLogin, mypageRouter);
// app.use("/post", postRouter);
// app.use("/mypage", mypageRouter);

app.listen(PORT, () => {
  console.log("서버 열림");
});
