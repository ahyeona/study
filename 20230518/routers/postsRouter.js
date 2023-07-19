const router = require("express").Router();
const { PostList, UserList, InsertPost, GetAllPost } = require("../controllers/postsController");

router.get("/", async (req, res) => {
    const user = await UserList();
    const data = await GetAllPost();
    res.render("list", {user, data});
});

router.post("/", PostList);

router.get("/insert", async (req, res)=>{
    const user = await UserList();
    res.render("insert", {user});
})

router.post("/insert", InsertPost)

module.exports = router;