const jwt = require("jsonwebtoken");
const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.login = async (req, res) =>{
    try {
        const {user_id, user_pw} = req.body;
        const user = await User.findOne({where:{user_id}});

        if (user == null) {
            return res.send("아이디 없음");
        }

        const same = bcrypt.compareSync(user_pw, user.user_pw);
        if (same) {
            const token = jwt.sign({
                id : user.id,
                user_id
            }, process.env.ACCESS_TOKEN_KEY, {
                expiresIn : "20m"
            });

            req.session.access_token = token;
            return res.redirect("http://127.0.0.1:5500/frontEnd/mypage.html");

        } else {
            return res.send("비밀번호 틀림");
        }

    } catch (error) {
        console.log(error);
    }
}