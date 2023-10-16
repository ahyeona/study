const express = require("express");
const fs = require("fs");
const axios = require("axios");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({extended : false}));

app.post("/getFile", async (req, res) => {
    const { name, description, image } = req.body;
    const data = {
        name,
        description,
        image : "https://apricot-wrong-platypus-336.mypinata.cloud/ipfs/" + image
    }

    const jsonString = JSON.stringify(data, null, 2);
    try {
        const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", jsonString);
        console.log("resp", resp);
    } catch (error) {
        console.log(error);
    }



    // fs.writeFileSync('data.json', jsonString, 'utf-8');
    // res.setHeader('Content-Type', 'application/json');
    // res.send(jsonString);
    // return res.send();
});



app.listen(PORT, ()=>{
    console.log("server on");
});