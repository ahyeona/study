const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next) => {
  try {
    const { accessToken } = req.session;

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (!err) {
        req.acc_decoded = decoded;
        next();
      } else {
        console.log(err);
        // return res.status(401).json({ message: "정상적이지 않은 액세스 토큰" });
        // return res.redirect("http://127.0.0.1:3000/login");
        return res.send({ error: "액세스토큰" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
