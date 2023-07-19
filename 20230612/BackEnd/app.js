const express = require("express");
const {sendEmail} = require("./mail");
const app = express();

app.get("/mail", sendEmail);

// app.get("/mail", );


app.listen("8000", ()=>{
    console.log("서버 열림");
});
