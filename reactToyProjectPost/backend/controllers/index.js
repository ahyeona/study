const { login, logout } = require("./loginController");
const { dupCheck, signUp } = require("./signUpController");
const {
  insertPost,
  getList,
  updatePost,
  deletePost,
  detailPost,
} = require("./postController");
const { getUser, getUserPosts } = require("./mypageController");

module.exports = {
  login,
  logout,
  dupCheck,
  signUp,
  insertPost,
  getList,
  updatePost,
  deletePost,
  getUser,
  getUserPosts,
  detailPost,
};
