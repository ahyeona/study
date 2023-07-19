const express = require("express");
const path = require("path");
const postRouter = require("./routers/postsRouter");
const app = express();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.use("/", postRouter);


app.listen(8000, ()=>{
    console.log("서버열림");
})




