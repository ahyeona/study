const router = require("express").Router();
const {login, dupChk, signUp} = require("../controllers/userController")

// 로그인
router.post("/login", login);

// 아이디 중복체크
router.post("/dupChk", dupChk);

// 회원가입
router.post("/signup", signUp);

module.exports = router;