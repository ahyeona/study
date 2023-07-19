const router = require("express").Router();
const {boardList, editBoard, addBoard, delBoard} = require("../controllers/boardController");
const {isLogin} = require("../middleware/loginMiddleware");

router.get("/", isLogin, boardList);

router.post("/edit", isLogin, editBoard);
router.post("/del", isLogin, delBoard);

router.post("/add", isLogin, addBoard);

module.exports = router;