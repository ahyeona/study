const { User, Post } = require("../models");

// 게시판 전체 글 반환
exports.getList = async (req, res) => {
  try {
    const postsArr = await Post.findAll({
      include: [{ model: User, attributes: ["id", "nickname"] }],
      order: [["createdAt", "DESC"]],
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

// 추가
exports.insertPost = async (req, res) => {
  try {
    const { id } = req.acc_decoded;
    const { title, content } = req.body;

    const post = await Post.create({ title, content, user_id: id });

    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// 상세
exports.detailPost = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.acc_decoded.id;

    const post = await Post.findOne({
      where: { id },
      include: [{ model: User, attributes: ["id", "nickname"] }],
    });

    post.dataValues.createdAt =
      post.dataValues.createdAt.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    let isWriter;
    if (user_id == post.user_id) {
      isWriter = true;
    } else {
      isWriter = false;
    }

    return res.json({ post, isWriter });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// 수정
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const post = await Post.update({ title, content }, { where: { id } });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// 삭제
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.destroy({ where: { id } });
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
