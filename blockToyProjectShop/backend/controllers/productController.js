const { Product } = require("../models");

// 상품 이미지 url 반환
exports.getImg = async (req, res) => {
    const { blockNumber } = req.body;

    const { url } = await Product.findOne({where : {blockNumber}});
    res.json(url);
}

// 상품 이미지 등록
exports.register = async (req, res) => {
    const { blockNumber } = req.body;
    await Product.create({blockNumber, url : req.file.filename});

    res.json({message : "완료"});
}