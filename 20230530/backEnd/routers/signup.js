const router = require("express").Router();
const {signup} = require("../controllers/signupController");

router.post("/", signup);
// router.post("/", (req, res) => {
//     const {body} = req;
//     console.log(body);
// });

module.exports = router;