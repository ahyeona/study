const router = require("express").Router();
// const {User} = require("../models");
const {Upload} = require("../mid/imgUpload");
const {editUser} = require("../controllers/mypageController");

// Upload.single 매개변수로 form에서 이미지 파일을 가지고 있는 input의 name을 작성
// router.post("/", Upload.single("upload"), async (req, res)=> {
router.post("/", Upload.single("upload"), editUser);

module.exports = router;