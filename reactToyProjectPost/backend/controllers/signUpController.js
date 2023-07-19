const bcrypt = require("bcrypt");
const { User } = require("../models");

// 이메일/닉네임 중복확인
exports.dupCheck = async (req, res) => {
  try {
    let result, obj;
    const { type, content } = req.body;

    switch (type) {
      case "email":
        obj = { email: content };
        break;
      case "nickname":
        obj = { nickname: content };
        break;
      default:
        break;
    }

    const user = await User.findOne({ where: obj });

    if (user) {
      // 해당하는 아이디/닉네임이 이미 있다면
      result = false;
    } else {
      result = true;
    }

    console.log("중복확인", result)
    return res.json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// 유저 추가
exports.signUp = async (req, res) => {
  try {
    const { email, password, nickname } = req.body;

    const pw = bcrypt.hashSync(password, 10);

    const user = await User.create({ email, password: pw, nickname });

    return res.json(user);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
