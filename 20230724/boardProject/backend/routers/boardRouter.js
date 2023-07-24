const router = require("express").Router();
const {getAllBoards, getDetailBoard, postBoard, editBoard, deleteBoard} = require("../controllers/boardController")

// 게시글 전체
router.get("/", getAllBoards);

// 게시글 상세
router.get("/detail/:id", getDetailBoard);

// 게시글 등록
router.post("/post", postBoard);

// 게시글 수정
router.post("/update/:id", editBoard);

// 게시글 삭제
router.get("/delete/:id", deleteBoard);

module.exports = router;