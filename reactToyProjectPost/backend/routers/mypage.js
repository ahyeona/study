const router = require("express").Router();
const { getUser, getUserPosts } = require("../controllers");

// 마이페이지 회원 정보 반환
router.get("/user", getUser);

// 마이페이지 유저의 게시글 반환
router.get("/post", getUserPosts);

module.exports = router;
