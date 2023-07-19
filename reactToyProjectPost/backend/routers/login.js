const router = require("express").Router();
const { login, logout } = require("../controllers");

// 로그인
router.post("/", login);

//로그아웃
router.get("/logout", logout)

module.exports = router;
