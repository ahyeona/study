const router = require("express").Router();
const {Login, viewUser, editUser} = require("../controllers/loginController");
const {isLogin} = require("../middleware/loginMiddleware");

router.post("/", Login);

router.get("/view", isLogin, viewUser);

router.post("/edit", isLogin, editUser);

module.exports = router;