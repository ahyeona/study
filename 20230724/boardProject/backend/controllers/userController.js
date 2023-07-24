const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ConnectionRefusedError } = require("sequelize");

// 로그인
exports.login = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    const user = await User.findOne({ where: { user_id } });

    if (user) {
      return res.json({ error: "아이디 없음" });
    }

    const same = bcrypt.compareSync(user_pw, user.user_pw);
    if (!same) {
      return res.json({ error: "비밀번호 틀림" });
    }

    // 액세스토큰 생성
    const token = jwt.sign({ user_id }, process.env.ACCESSTOKEN_KEY, {
      expiresIn: "15m",
    });

    req.session.access_token = token;

    // 아이디 비밀번호 일치할 경우
    return res.json({ user_id: user.user_id });
  } catch (error) {
    console.log(error);
  }
};

// 중복확인
exports.dupChk = async (req, res) => {
  try {
    const { user_id } = req.body;

    const user = await User.findOne({ where: { user_id } });

    console.log("usercontroller 중복확인", user_id);

    // 이미 존재하는 아이디
    if (user) {
      return res.json({ error: "이미 존재하는 아이디" });
    }

    // 사용 가능한 아이디
    return res.json({ message: "사용 가능한 아이디" });
  } catch (error) {
    console.log(error);
  }
};

// 회원가입
exports.signUp = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    console.log("회원가입", user_id, user_pw);

    const pw = bcrypt.hashSync(user_pw, 10);

    await User.create({ user_id, user_pw: pw });
    console.log("usercontroller", user_id, user_pw);
    return res.json({ message: "회원가입 완료" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "회원가입 실패" });
  }
};
