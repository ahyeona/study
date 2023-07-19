const router = require("express").Router();
const { dupCheck, signUp } = require("../controllers");

// 이메일, 닉네임 중복확인
router.post("/dupCheck", dupCheck);

// 유저 가입
router.post("/", signUp);

module.exports = router;
