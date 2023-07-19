const { User, Post } = require("../models");

// 현재 유저 정보 반환
exports.getUser = async (req, res) => {
  try {
    const { id } = req.acc_decoded;
    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id },
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// 현재 유저가 작성한 게시글 반환
exports.getUserPosts = async (req, res) => {
  try {
    const { id } = req.acc_decoded;
    const postsArr = await Post.findAll({
      include: [{ model: User, attributes: ["nickname"] }],
      order: [["createdAt", "DESC"]],
      where: { user_id: id },
    });

    const posts = postsArr.map((post) => {
      const createdAt = post.createdAt;

      const formattedCreatedAt = createdAt.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      return { ...post.dataValues, createdAt: formattedCreatedAt };
    });

    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
