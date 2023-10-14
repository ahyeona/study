const express = require("express");
const cors = require("cors");
const dot = require("dotenv").config();
const path = require("path");

const { sequelize } = require("./models");
const productRouter = require("./routers/product");

const PORT = 8080;
const app = express();

app.use(cors({
    origin : ["http://localhost:3000"],
    credentials: true
}));

sequelize
    .sync({ force: false })
    .then(() => { console.log("연결 성공") })
    .catch((error) => { console.log(error) });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRouter);
app.use("/imgs", express.static("public"));

app.listen(PORT, () => {
    console.log("server on");
});