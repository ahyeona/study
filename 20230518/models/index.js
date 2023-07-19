const { tableInit, userList, insertPost, insertUser, postList, getAllPost } = require("./postsModel");

tableInit();

// insertUser("user1");
// insertUser("user2");
// insertUser("user3");
// insertPost("세번째 글 입니다", 1);

// postList(1);
module.exports = { userList, insertPost, insertUser, postList, getAllPost };