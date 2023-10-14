const { Product } = require("../models");

// 상품 이미지 url 반환
exports.getImg = async (req, res) => {
    const { blockHash } = req.body;

    const { url } = await Product.findOne({where : {blockhash : blockHash}});
    res.json(url);
}

// 상품 이미지 등록
exports.register = async (req, res) => {
    const { blockHash } = req.body;
    await Product.create({blockhash : blockHash, url : req.file.filename});

    res.json({message : "완료"});
}