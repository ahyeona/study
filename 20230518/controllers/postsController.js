const exp = require("constants");
const {userList, insertPost, postList, getAllPost} = require("../models");

exports.PostList = async (req, res) => {
    const user_id = req.body.user_id;
    const data = await postList(user_id);
    const user = await userList();
    res.render("list", {data, user});
}

exports.UserList = async (req, res) => {
    const user = await userList();
    return user;
}

exports.InsertPost = async (req, res) => {
    const {user_id, content } = req.body;
    await insertPost(content, user_id);
    res.redirect("/");
}

exports.GetAllPost = async (req, res) => {
    const data = await getAllPost();
    return data;
}
