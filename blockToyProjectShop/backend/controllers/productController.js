const { Product } = require("../models");

// 상품 이미지 url 반환
exports.getImg = async (req, res) => {
    const { blockHash } = req.body;

    const data = await Product.findOne({where : {blockhash : blockHash}});
    console.log("data : ",data);
    res.json({message : "완료"});
}

// 상품 이미지 등록
exports.register = async (req, res) => {
    console.log(req.files);
    console.log(req.files.filename);
    const { blockHash } = req.body;
    await Product.create({blockhash : blockHash, url : req.files.filename});
    console.log("이미지 등록");
    res.json({message : "완료"});
}