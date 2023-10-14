const router = require("express").Router();
const { register, getImg } = require("../controllers/productController");
const { upload } = require("../middleware/upload");

// 상품 이미지 url 반환
router.post("/getImg", getImg);

// 상품 이미지 등록(multer 미들웨어 사용)
router.post("/register", upload.single("upload"), register);

module.exports = router;