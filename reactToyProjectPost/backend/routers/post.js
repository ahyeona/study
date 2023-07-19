const router = require("express").Router();
const {
  getList,
  insertPost,
  updatePost,
  deletePost,
  detailPost,
} = require("../controllers");

// 게시글 목록 반환
router.get("/list", getList);

// 게시글 추가
router.post("/insert", insertPost);

// 게시글 상세 내용 반환
router.get("/detail/:id", detailPost);

// 게시글 수정
router.post("/update/:id", updatePost);

// 게시글 삭제
router.get("/delete/:id", deletePost);

module.exports = router;
