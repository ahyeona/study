const express = require("express");
const session = require("express-session");
const dot = require("dotenv").config();
const cors = require("cors");
const { sequelize } = require("./models");
const userRouter = require("./routers/userRouter");
const boardRouter = require("./routers/boardRouter");
const { isLogin } = require("./middleware/isLogin");

const app = express();
const PORT = 8080;

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
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userRouter);
app.use("/board", isLogin, boardRouter);

app.listen(PORT, () => {
  console.log("서버 열림");
});
