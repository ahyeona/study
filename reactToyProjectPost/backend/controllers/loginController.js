const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

// 로그인
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    // 존재하지 않는 아이디
    if (!user) {
      return res.status(404).json({ message: "아이디 존재하지 않음" });
    }

    // 일치하지 않는 비밀번호
    const same = bcrypt.compareSync(password, user.password);
    if (!same) {
      return res.status(401).json({ message: "비밀번호 틀림" });
    }

    // 올바르게 로그인 했을 경우 액세스 토큰 발급
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "15m",
      }
    );

    req.session.accessToken = token;

    return res.status(200).json({ message: "로그인 성공", id:user.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//로그아웃
exports.logout = (req, res) => {
  try {
    req.session.destroy();
    return res.json({message:"로그아웃"});
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}