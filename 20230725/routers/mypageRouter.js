const router = require("express").Router();

router.get("/", (req, res)=>{
    console.log(req.decoded);
    return res.json("ddfsdfsdf")
});

module.exports = router;